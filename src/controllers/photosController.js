const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route for fetching photos
router.get('/photos', async (req, res) => {
  try {
    const { page, perPage, q, category } = req.query;
    const pageNumber = page || 1;
    const pageSize = perPage || 9;

    const response = await axios.get('https://pixabay.com/api/?key=36729742-f9444851f7a0ae15960b5925c', {
      params: {
        category: category || 'flowers',
        page: pageNumber,
        per_page: pageSize,
      },
    });

    const photos = response.data.hits;
    console.log(photos, "photossss")
    res.setHeader('Cache-Control', 'no-cache');
    res.json(photos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

module.exports = router;