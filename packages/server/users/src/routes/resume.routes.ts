/* eslint-disable new-cap */
import {Router} from 'express';

import ResumeModel from '@models/resume.model';
import ResumeService from '@services/resume.service';
import ResumeController from '@controllers/resume.controller';
import prisma from '@models/connect.prisma';

// ? Instanciando as classes de model, service, e controller
const model = new ResumeModel(prisma);
const service = new ResumeService(model);
const controller = new ResumeController(service);

const router = Router();

router.post('/newResume', async (req, res) => controller.newResume(req, res));
router.get('/getResume', async (req, res) => controller.getResume(req, res));
router.patch('/updateResume', async (req, res) => controller.updateResume(req, res));

export default router;
