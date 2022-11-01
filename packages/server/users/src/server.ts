import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import middlewareError from '@middleware/error.middleware';
import routerUser from './routes/user.routes';
import routerResume from './routes/resume.routes';
import routerClient from './routes/client.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routerUser);
app.use(routerResume);
app.use(routerClient);

app.use(middlewareError);

app.listen(3010, () => {
	console.log('Rodando na porta 3010');
});
