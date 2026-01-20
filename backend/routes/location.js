const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config({ path: ".env.location" });

const ORS_API_KEY = process.env.ORS_API_KEY; // keep key private

router.get("/route", async (req, res) => {
  const { startLng, startLat, endLng, endLat } = req.query;
  if (!startLng || !startLat || !endLng || !endLat) {
    return res.status(400).json({ error: "Missing coordinates" });
  }

  try {
    const response = await axios.get(
      "https://api.openrouteservice.org/v2/directions/driving-car",
      {
        params: {
          api_key: ORS_API_KEY,
          start: `${startLng},${startLat}`,
          end: `${endLng},${endLat}`,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch route" });
  }
});

module.exports = router;
