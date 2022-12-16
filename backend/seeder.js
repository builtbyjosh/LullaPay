import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import User from './models/userModel.js';
import Daycare from './models/daycareModel.js';
import Kid from './models/kidModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Kid.deleteMany();
    await Daycare.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const daycareAdmin = createdUsers[1]._id;
    const guardian = createdUsers[2]._id;

    const createdDaycare = await Daycare.create({
      user: daycareAdmin._id,
      daycareName: 'Luna Park Daycare',
      streetAddress: '123 Main St.',
      city: 'Chicago',
      state: 'Illinois',
      zip: 60625,
      phone: 8675309,
      email: 'daycare@example.com',
    });

    const createdKid = await Kid.create({
      guardian: guardian._id,
      daycare: createdDaycare._id,
      firstName: 'Johnny',
      lastName: 'Doe',
      age: 5,
    });
    console.log('Data Imported!'.green.inverse);
    console.log(createdKid.blue);
    console.log(createdDaycare.green);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Daycare.deleteMany();
    await Kid.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
