import { Request, Response } from 'express';
import { USERS } from './data';

export function authenticate(email: string, password: string) {
  const user: any = Object.values(USERS).find(user => user.email === email);
  return user && user.password == password ? user : undefined;
}

export function loginUser(req: Request, res: Response) {
  console.info('User login attempt ...');

  const { email, password } = req.body;
  const user = authenticate(email, password);

  user
    ? res.status(200).json({ id: user.id, email: user.email, image: user.image, name: user.name, role: user.role })
    : res.sendStatus(403);
}
