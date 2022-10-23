import { Request, Response } from 'express';
import { EPISODES } from './data';

export function getAllEpisodes(req: Request, res: Response) {
  console.info('Retrieving episodes data ...');
  setTimeout(() => res.status(200).json({ payload: Object.values(EPISODES) }), 1000);
}

export function findEpisodeForPodcast(podcastId: number) {
  return Object.values(EPISODES).filter(episode => episode.podcastId == podcastId);
}
