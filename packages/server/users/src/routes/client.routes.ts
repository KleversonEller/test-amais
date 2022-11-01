/* eslint-disable new-cap */
import {Router} from 'express';

import ClientModel from '@models/client.model';
import ClientService from '@services/client.service';
import ClientController from '@controllers/client.controller';
import prisma from '@models/connect.prisma';

// ? Instanciando as classes de model, service, e controller
const model = new ClientModel(prisma);
const service = new ClientService(model);
const controller = new ClientController(service);

const router = Router();

router.get('/getAllInfos', async (req, res) => controller.getAllInfos(req, res));

export default router;
