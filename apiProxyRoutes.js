const express = require('express');
const router = express.Router();
const { getMatches, getMatchDetails, getPlayers } = require('../controllers/proxyController');

// Proxy routes to cricket API
router.get('/matches', getMatches);
router.get('/match/:id', getMatchDetails);
router.get('/players', getPlayers);
router.get('/players/:id', getPlayers);

module.exports = router;
