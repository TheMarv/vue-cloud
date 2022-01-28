import { Router, Request, Response } from 'express';
import fs from 'fs';
import formidable from 'formidable';
import File from '../models/file';


if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).end();
  const files = await File.find({userid: req.user._id});
  res.json(files);
});

router.get('/:id', async (req: Request, res: Response) => {
  const file = await File.findOne({_id: req.params.id});
  res.sendFile(`${process.cwd()}/uploads/${file.fileName}`);
});

router.post('/upload', async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).end();
  const form = formidable({
    uploadDir: './uploads',
  });
  form.on('file', async (data: string, file: formidable.File) => {
    if (!req.user) return res.status(401).end();
    const mimetype = file.mimetype;
    if (!(mimetype?.startsWith('image') || mimetype?.startsWith('video') || mimetype === 'text/plain')) {
      return res.status(400).send('Unsupported file!');
    }
    const insertedFile = await File.create({
      userid: req.user._id,
      fileName: file.newFilename,
      fileIcon: mimetype?.startsWith('image') ? 'image' : mimetype?.startsWith('video') ? 'video_file' : 'description',
      originalName: file.originalFilename
    });
    res.status(200).json(insertedFile);
  });
  form.parse(req, (err: unknown, fields: formidable.Fields, file: formidable.Files) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
});

export default router;