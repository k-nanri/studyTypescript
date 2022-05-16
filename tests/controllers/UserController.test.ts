import { Request, Response } from 'express';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { UserController } from '../../src/controllers/UserController';

describe('test', () => {
  test('200 OK', async () => {
    const req: Request = getMockReq();
    const { res } = getMockRes();
    const target: UserController = new UserController(req, res);
    const actual: Response = target.getAllUser();
    expect(actual.statusCode).toBe(200);
  });
});
