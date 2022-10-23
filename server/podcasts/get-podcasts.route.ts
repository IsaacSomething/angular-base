import { Request, Response } from 'express';
import { PODCASTS } from './data';

export function getAllPodcasts(req: Request, res: Response) {
  console.info('Retrieving podcasts data ...');
  setTimeout(() => res.status(200).json({ payload: Object.values(PODCASTS) }), 1000);
}

export function getPodcastByUrl(req: Request, res: Response) {
  const url = req.params['url'];
  const podcast = Object.values(PODCASTS).find((podcast: any) => podcast.url === url);

  setTimeout(() => res.status(200).json(podcast), 1000);
}

export function findPodcastById(podcastId: number) {
  return PODCASTS[podcastId];
}
