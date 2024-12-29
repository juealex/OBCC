import { Router } from 'express';
import { LearningpageGetHandler } from './handler';
import { HomePageGetHandler,VideoPageGetHandler } from './handler';

const router = Router();

router.get('/', LearningpageGetHandler);

router.get('/home', HomePageGetHandler);

router.get('/video' , VideoPageGetHandler);

export default router; 