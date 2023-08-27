import express from 'express';
import fetchWeather from '../controllers/weatherController.js';

const router = express.Router();

router.post('/getW', async (req, res) => {
  const { cities } = req.body;
  try {
    const weatherData = await fetchWeather(cities);
    res.json({ weather: weatherData });
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).json({ error: 'Error fetching weather' });
  }
});

export default router;
