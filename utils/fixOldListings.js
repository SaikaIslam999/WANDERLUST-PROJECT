const mongoose = require("mongoose");
const Listing = require("../models/listing");
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/wanderlust";

console.log("Using DB:", DB_URL);

mongoose.connect(DB_URL);

async function fixListings() {
  const listings = await Listing.find({
    $or: [
      { "geometry.coordinates": { $size: 0 } },
      { geometry: { $exists: false } }
    ]
  });
  
  console.log(`Fixing ${listings.length} listings...`);

  for (let listing of listings) {
    const location = `${listing.location}, ${listing.country}`;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
    );

    const data = await res.json();

    if (data.length) {
      listing.geometry = {
        type: "Point",
        coordinates: [
          Number(data[0].lon), // lng
          Number(data[0].lat), // lat
        ],
      };

      await listing.save();
      console.log(`✔ Fixed: ${listing.title}`);
    } else {
      console.log(`❌ Location not found: ${listing.title}`);
    }
  }

  mongoose.connection.close();
}

fixListings();
