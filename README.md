🌍 WanderLust – Full Stack Travel Listing Platform

WanderLust is a full-stack travel accommodation web application where users can explore, create, edit, and review property listings. The platform allows property owners to showcase destinations while travelers can discover stays and leave reviews.

Built using modern backend architecture and interactive map integration, the project demonstrates complete CRUD functionality with authentication and geolocation features.

🚀 Features

🔐 User Authentication (Register / Login / Logout)

🏠 Create, Edit & Delete Listings

🗺️ Interactive Map with Location Marker (OpenStreetMap + Leaflet)

⭐ Review & Rating System

🖼️ Image Upload with Cloudinary

🛡️ Authorization (Only owners can edit/delete)

💬 Flash Messages & Error Handling

📱 Responsive UI

🛠️ Tech Stack
Backend

Node.js

Express.js

MongoDB

Mongoose

Frontend

EJS Templates

Bootstrap

Leaflet.js (Maps)

Other Tools

Cloudinary (Image Hosting)

Multer (File Upload)

Passport.js (Authentication)

OpenStreetMap (Geocoding)

📁 Project Structure
controllers/   → Business logic (Listings, Reviews, Users)
models/        → Mongoose Schemas
routes/        → Express Routes
views/         → EJS Templates
public/        → CSS & Client-side JS
utils/         → Custom middleware & error handling

🔐 Authentication & Authorization

Users must be logged in to create listings.

Only listing owners can edit or delete their listings.

Reviews are linked to authenticated users.

🗺️ Map Integration

Each listing stores geographic coordinates using OpenStreetMap geocoding.
The location is displayed using Leaflet with animated marker effects.

📦 Installation
git clone https://github.com/your-username/WANDERLUST-PROJECT.git
cd WANDERLUST-PROJECT
npm install


Create a .env file:

MONGO_URL=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=your_secret


Run the server:

node app.js

🎯 Future Improvements

Wishlist feature

Advanced search & filtering

Booking system

Payment integration

User profile dashboard

👩‍💻 Developed By

Saika Islam
Full Stack Web Development Project
