const axios = require('axios');
const { API_KEY } = require('../../config/cricketApi');

exports.getMatches = async (req, res) => {
  try {
    const response = await axios.get(`https://api.cricapi.com/v1/matches?apikey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
};

exports.getMatchDetails = async (req, res) => {
  try {
    const response = await axios.get(`https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch match details' });
  }
};

exports.getPlayers = async (req, res) => {
  try {
    const url = req.params.id 
      ? `https://api.cricapi.com/v1/players_info?apikey=${API_KEY}&id=${req.params.id}`
      : `https://api.cricapi.com/v1/players?apikey=${API_KEY}`;
    
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch players' });
  }
};
