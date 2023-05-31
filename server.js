const express = require('express');
const app = express();
const PORT = 3000;
const photosController = require('./src/controllers/photosController');
const cors = require('cors');

app.use(cors());
app.use('/api', photosController);

// Server PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
