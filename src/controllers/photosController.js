const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route for fetching photos
router.get('/photos', async (req, res) => {
  try {
    const { page, perPage, sort, category } = req.query;
    const pageNumber = page || 1;
    const pageSize = perPage || 9;
    
    let sortOrder;
    if (sort === "date") {
      sortOrder = "latest";
    } else if (sort === "id") {
      sortOrder = "popular";
    } else {
      sortOrder = "popular";
    }

    const response = await axios.get('https://pixabay.com/api/?key=36729742-f9444851f7a0ae15960b5925c', {
      params: {
        category: category || 'flowers',
        page: pageNumber,
        per_page: pageSize,
        sort: sortOrder,
      },
    });
    const photos = response.data.hits;
    res.setHeader('Cache-Control', 'no-cache');
    res.json(photos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

module.exports = router;