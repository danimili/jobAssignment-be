const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const photosController = require('./src/controllers/photosController');
const cors = require('cors');

const corsOptions = {
  origin: 'https://job-assignment-fe.vercel.app',
};

app.use(cors(corsOptions));

// app.use(cors());
app.use('/api', photosController);

// Server PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

