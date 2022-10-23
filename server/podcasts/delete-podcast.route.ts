import { Request, Response } from 'express';
import { PODCASTS } from './data';

export function deleteCourse(req: Request, res: Response) {
  console.info('Deleting podcast ...');

  const id = req.params['id'];
  delete PODCASTS[id];

  setTimeout(() => res.status(200).json({ id }), 2000);
}
