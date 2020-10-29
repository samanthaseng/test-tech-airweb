const express = require('express');
const router = express.Router();
const { getProducts } = require('../services/products.services');

/* GET home page. */
router.get('/products', async function(req, res, next) {
  const result = await getProducts();

  res.status(200).json({ categoriesList: result });
});

module.exports = router;
