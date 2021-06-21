import { Router } from 'express';
import { newLead } from '../services/createLeads.service'

export const router = Router();

router.post('/create-lead', newLead)