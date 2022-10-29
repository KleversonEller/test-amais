/* eslint-disable new-cap */
import {Router} from 'express';

import UserModel from '@models/user.model';
import UserService from '@services/user.service';
import UserController from '@controllers/user.controller';
import prisma from '@models/connect.prisma';

// ? Instanciando as classes de model, service, e controller
const model = new UserModel(prisma);
const service = new UserService(model);
const controller = new UserController(service);

const router = Router();

router.post('/newUserAndResume', async (req, res) => controller.newUserAndResume(req, res));
router.post('/newUser', async (req, res) => controller.newUser(req, res));
router.post('/login', async (req, res) => controller.login(req, res));
router.get('/getUser', async (req, res) => controller.getUser(req, res));
router.get('/getUserAndResume', async (req, res) => controller.getUserAndResume(req, res));

export default router;
