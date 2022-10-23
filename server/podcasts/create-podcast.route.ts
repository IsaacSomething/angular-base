import { Request, Response } from 'express';
import { PODCASTS } from './data';

export var podcastKeyCounter = 100;

export function createPodcast(req: Request, res: Response) {
  console.info('Creating new podcast ...');

  const changes = req.body;

  const newPodcast = {
    id: podcastKeyCounter,
    seqNo: podcastKeyCounter,
    ...changes
  };

  PODCASTS[newPodcast.id] = newPodcast;
  podcastKeyCounter += 1;

  setTimeout(() => res.status(200).json(newPodcast), 2000);
}
