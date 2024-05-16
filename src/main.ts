import express from 'express';
import { apiRouter } from './routers/api-router';

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
