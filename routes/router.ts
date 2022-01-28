import { Router } from 'express';
import userRouter, { checkUser } from './user';
import fileRouter from './file';

const router = Router();

router.use('/user', userRouter);
router.use(checkUser);
router.use('/files', fileRouter);

export default router;