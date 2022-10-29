/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import middlewareError from '@middleware/error.middleware';
import router from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use(middlewareError);

app.listen(3010, () => {
	console.log('Rodando na porta 3010');
});
