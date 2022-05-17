import { Request, Response } from 'express';

/**
 *
 */
export class UserController {
  /**
   *
   */
  constructor() {}

  /**
   * @param {Request} req
   * @param {Response} res
   */
  public getAllUser(req: Request, res: Response): void {
    const users = [
      {
        id: 1,
        name: 'testuser',
        age: 30,
      },
    ];
    res.status(200).send(JSON.stringify(users));
  }
}
