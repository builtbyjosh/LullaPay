import express from 'express'
import { getKidById, getKids } from '../controllers/kidControllers.js' 

const router = express.Router()

router.route('/').get(getKids)
router.route('/:id').get(getKidById)


export default router