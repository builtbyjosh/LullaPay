import Daycare from '../models/daycareModel.js';
import asyncHandler from 'express-async-handler';

// @desc fetch all daycares
// @route GET /api/daycares
// @access Public
const getDaycares = asyncHandler(async (req, res) => {
  const daycares = await Daycare.find({});

  res.json(daycares);
});

// @desc fetch single daycare
// @route GET /api/daycares/:id
// @access Public
const getDaycareById = asyncHandler(async (req, res) => {
  const daycare = await Daycare.findById(req.params.id);
  if (daycare) {
    res.json(daycare);
  } else {
    res.status(404);
    throw new Error('Daycare not found');
  }
  res.json(daycare);
});

export { getDaycareById, getDaycares };