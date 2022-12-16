import express from 'express'
import { getDaycareById, getDaycares } from '../controllers/daycareController.js';

const router = express.Router()

router.route('/').get(getDaycares)
router.route('/:id').get(getDaycareById)

export default router