import express from 'express';

const router = express.Router();
const cartController = require('../controllers/cart');

/* Fetch cart */
router.get('/', cartController.fetch);

module.exports = router;
