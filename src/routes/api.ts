import { Router } from 'express';
import { authMw } from '../middleware';
import authRouter from './auth-router';
import userRouter from './user-router';
import companyRouter from './company-router';


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use('/auth', authRouter);
apiRouter.use('/users', authMw, userRouter);
apiRouter.use('/companies', authMw, companyRouter)

// Export default
export default apiRouter;
