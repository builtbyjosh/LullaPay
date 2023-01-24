import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js'
import kidRoutes from './routes/kidRoutes.js'
import daycareRoutes from './routes/daycareRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors'

dotenv.config();

connectDB();

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('api is running...');
});

app.use('/api/users', userRoutes); 
app.use('/api/kids', kidRoutes); 
app.use('/api/daycares', daycareRoutes); 

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
});
