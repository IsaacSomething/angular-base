export interface Podcast {
  id: number;
  seqId: number;
  uuid: string;
  name: string;
  description: string;
  imageUrl: string;
  genres: string;
  isExplicitContent: boolean;
  websiteUrl: string;
  authorName: string;
  isComplete: boolean;
  episodes: [];
}
