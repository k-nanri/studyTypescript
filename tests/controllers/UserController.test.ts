//import { Request, Response } from 'express';
import { mockReq, mockRes } from 'sinon-express-mock';
import { UserController } from '../../src/controllers/UserController';

describe('test', () => {
  test('200 OK', async () => {
    const request: any = {
      query: {
        price: '100',
      },
    };

    const response: any = {
      statusCode: 200,
    };

    const req = mockReq(request);
    const res = mockRes(response);
    const target: UserController = new UserController();

    target.getAllUser(req, res);
    expect(res.statusCode).toBe(200);
    console.log(res.json());
  });
});
