import express, { Application, Request, Response } from 'express';
import { UserController } from './controllers/UserController';

const app: Application = express();
const PORT: string = '3000';

// app.useで関数をセットするとリクエストを受けた際に関数を順々に実行する
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (_req: Request, res: Response) => {
  const userContoller: UserController = new UserController(_req, res);
  return userContoller.getAllUser();
});

// 受信待ち用設定
try {
  app.listen(PORT, () => {
    console.log('server running.');
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
