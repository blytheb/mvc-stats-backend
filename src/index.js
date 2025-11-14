import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import playerRoutes from '../routes/playerRoutes.js';

dotenv.config();

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());  // Middleware to parse JSON bodies

//set up routes
app.use('/api/players', playerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> (
    console.log(`Server is running on port ${PORT}`)
));
