import { Request, Response } from 'express';

export const LearningpageGetHandler = (_: Request, res: Response) => {
    res.render('index');
};

export const HomePageGetHandler = (_: Request, res: Response) => {
    res.render('HomePage');
};
export const VideoPageGetHandler = (_: Request, res: Response) => {
    res.render('video');
};