import { Request, Response } from 'express';
import { USERS } from './data';

export function getAllUsers(req: Request, res: Response) {
  console.info('Retrieving users data ...');
  setTimeout(() => res.status(200).json({ payload: Object.values(USERS) }), 1000);
}
