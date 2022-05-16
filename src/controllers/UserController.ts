import { Request, Response } from 'express';

/**
 *
 */
export class UserController {
  private request: Request;
  private response: Response;

  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  constructor(public req: Request, public res: Response) {
    this.request = req;
    this.response = res;
  }

  /**
   *
   * @returns {Response}
   */
  public getAllUser(): Response {
    const users = [
      {
        id: 1,
        name: 'testuser',
        age: 30,
      },
    ];
    return this.res.status(200).send(JSON.stringify(users));
  }
}
