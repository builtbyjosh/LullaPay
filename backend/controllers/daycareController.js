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

// @desc Register New Daycare
// @route POST /api/daycares
// @access Public
const registerDaycare = asyncHandler(async (req, res) => {
  const {
    user,
    daycareName,
    streetAddress,
    city,
    state,
    zipCode,
    phone,
    email,
  } = req.body;

  const userExists = await Daycare.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error('Daycare already exists');
  }

  const daycare = await Daycare.create({
    user,
    daycareName,
    streetAddress,
    city,
    state,
    zipCode,
    phone,
    email,
  });

  if (daycare) {
    res.status(201).json({
      _id: user._id,
      daycareName: user.daycareName,
      streetAddress: user.streetAddress,
      city: user.city,
      state: user.state,
      zipCode: user.zipCode,
      phone: user.phone,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

export { getDaycareById, getDaycares, registerDaycare };
