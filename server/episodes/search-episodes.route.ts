import { Request, Response } from 'express'; 
import { EPISODES } from './data';

export function searchEpisodes(req: Request, res: Response) {
  console.info('Searching for episodes ...');

  const queryParams = req.query as any;

  const podcastId = queryParams.podcastId,
    filter = queryParams.filter || '',
    sortOrder = queryParams.sortOrder || 'asc',
    pageNumber = parseInt(queryParams.pageNumber) || 0,
    pageSize = parseInt(queryParams.pageSize);

  let episodes = Object.values(EPISODES)
    .filter(episode => episode.podcastId == podcastId)
    .sort((l1, l2) => l1.podcastId - l2.podcastId);

  if (filter) {
    episodes = episodes.filter(episode => episode.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
  }

  if (sortOrder == 'desc') {
    episodes = episodes.reverse();
  }

  const initialPos = pageNumber * pageSize;
  console.info(`Retrieving episodes page starting at position ${initialPos}, page size ${pageSize} for course ${podcastId}`);
  const episodesPage = episodes.slice(initialPos, initialPos + pageSize);
  res.status(200).json(episodesPage);
}
