const express = require('express');
const router = express.Router();

const eventController = require('../../../controllers/event_controller');

// router.get('/team', apiController.team);

router.post('/register', eventController.register);

module.exports = router;