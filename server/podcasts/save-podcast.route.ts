import { Request, Response } from 'express';
import { PODCASTS } from './data';

export function savePodcast(req: Request, res: Response) {
  console.info('Saving podcast ...');

  const id = req.params['id'];
  const changes = req.body;

  PODCASTS[id] = {
    ...PODCASTS[id],
    ...changes
  };

  setTimeout(() => res.status(200).json(PODCASTS[id]), 2000);
}
