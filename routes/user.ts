import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { iUser } from '../models/user';

const JWT_SECRET = '/)<]_KuAX}&"/@&&"ZDs(MGG!C{Uh@~5*rA/UmSx`F:rQFR';
const JWT_EXP = 7 * 24 * 60 * 60 * 1000;

const router = Router();

router.post('/login',
  body('email').notEmpty().isEmail().withMessage('Please enter a valid email address!'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.mapped();
      return res.status(400).send(
        err.email ? err.email.msg : 
        err.password ? err.password.msg : 'Unknown error'
      );
    }
    const user = await User.findOne({email: req.body.email});
    if (user) {
      const pwcheck = bcrypt.compareSync(req.body.password, user.password);
      if (pwcheck) {
        const token = jwt.sign({id: user._id, exp: Date.now() + JWT_EXP}, JWT_SECRET);
        return res.status(200).send(token);
      }
    }
    res.status(401).end();
  }
);

router.post('/register',
  body('email').notEmpty().isEmail().withMessage('Please enter a valid email address!'),
  body('password').notEmpty().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).withMessage('Your password has to be 8+ characters and contain at least one number and one letter!'),
  body('username').notEmpty().matches(/^[A-z0-9]{4,32}$/).withMessage('Your username can only contain letters and numbers and has to be between 4 and 32 characters!'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.mapped();
      console.log(req.body);
      return res.status(400).send(
        err.email ? err.email.msg : 
        err.password ? err.password.msg :
        err.username ? err.username.msg : 'Unknown error'
      );
    }
    const exists = await User.exists({ email: req.body.email });
    if (exists) return res.status(400).send('Email is already registered!');
    const user = await User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      username: req.body.username
    });
    const token = jwt.sign({id: user._id, exp: Date.now() + JWT_EXP}, JWT_SECRET);
    res.status(200).send(token);
  }
);

export async function checkUser(req: Request, res: Response, next: () => void) {
  if (req.headers.authorization) {
    try {
      const token = jwt.verify(req.headers.authorization.split(' ')[1], JWT_SECRET);
      req.user = await User.findOne({_id: (<Record<string, string>>token).id});
    } catch (ex) {
      console.log(ex);
    }
  }
  next();
}

router.use(checkUser);

router.get('/', (req: Request, res: Response) => {
  if (req.user === null) return res.status(401).end();
  res.status(200).end();
});

declare global {
  namespace Express {
    interface Request {
      user: iUser | null
    }
  }
}

export default router;