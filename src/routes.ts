import { Router } from 'express';
import { LearningpageGetHandler } from './handler';
import { HomePageGetHandler } from './handler';

const router = Router();

router.get('/', LearningpageGetHandler);

router.get('/home', HomePageGetHandler);

export default router; 