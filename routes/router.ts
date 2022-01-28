import express, { Request, Router, Response } from 'express';
import userRouter, { checkUser } from './user';
import fileRouter from './file';

const router = Router();

router.use('/user', userRouter);
router.use(checkUser);
router.use('/files', fileRouter);
router.use(express.static(`${process.cwd()}/web/dist/spa/`));
router.get('/', (req: Request, res: Response) => {
  res.sendFile(`${process.cwd()}/web/dist/spa/index.html`);
});

export default router;