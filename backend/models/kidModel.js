import mongoose from 'mongoose';

const kidSchema = mongoose.Schema(
  {
    guardian: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    daycare: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Daycare',
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Kid = mongoose.model('Kid', kidSchema);

export default Kid
