const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route for fetching photos
router.get('/photos', async (req, res) => {
  try {
    const response = await axios.get('https://pixabay.com/api/?key=36729742-f9444851f7a0ae15960b5925c');
    const photos = response.data;
    console.log(response.data, "res data")
    res.json(photos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

module.exports = router;
