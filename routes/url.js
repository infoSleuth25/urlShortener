const express = require('express');
const router = express.Router();
const {generateNewShortURL,getOriginalURL,getAnalyticsById} = require('../controllers/url');

router.post('/',generateNewShortURL);
router.get('/:shortId',getOriginalURL);
router.get('/analytics/:shortId',getAnalyticsById);
module.exports = router;