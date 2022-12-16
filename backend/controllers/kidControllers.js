import Kid from '../models/kidModel.js';
import asyncHandler from 'express-async-handler';

// @desc fetch all kids
// @route GET /api/kids
// @access Public
const getKids = asyncHandler(async (req, res) => {
  const kids = await Kid.find({});

  res.json(kids);
});

// @desc fetch single kid
// @route GET /api/kids/:id
// @access Public
const getKidById = asyncHandler(async (req, res) => {
  const kid = await Kid.findById(req.params.id);
  if (kid) {
    res.json(kid);
  } else {
    res.status(404);
    throw new Error('Daycare not found');
  }
  res.json(kid);
});

export { getKidById, getKids };