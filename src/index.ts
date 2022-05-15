import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: string = '3000';

// app.useで関数をセットするとリクエストを受けた際に関数を順々に実行する
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (_req: Request, res: Response) => {
  console.log(_req.query);
  return res.status(200).send({
    message: 'Hello World!',
  });
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
