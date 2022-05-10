const express = require('express');
const router = express.Router();
const {
  getComers,
  setComer,
  updateComer,
  deleteComer,
} = require('../controllers/comControllers');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getComers).post(protect, setComer);

router.route('/:id').put(protect, updateComer).delete(protect, deleteComer);

module.exports = router;
