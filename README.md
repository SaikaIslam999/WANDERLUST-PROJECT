🌍 WanderLust – Full Stack Travel Accommodation Platform

WanderLust is a production-ready full-stack web application that enables users to discover, create, and manage travel accommodation listings. The platform integrates authentication, image uploads, geolocation services, and role-based authorization to deliver a complete real-world CRUD experience.

Designed with scalable backend architecture and interactive map integration, this project demonstrates modern full-stack development practices using the MERN ecosystem fundamentals.

🚀 Core Features

🔐 Secure User Authentication (Register / Login / Logout)

🏠 Create, Update & Delete Property Listings

🖼️ Cloud-based Image Upload (Cloudinary Integration)

⭐ Review & Rating System

🛡️ Role-Based Authorization (Owner-only modifications)

🗺️ Interactive Map with Geolocation (Leaflet + OpenStreetMap)

💬 Flash Messaging & Centralized Error Handling

📱 Responsive UI using Bootstrap

🛠️ Tech Stack
Backend

Node.js

Express.js

MongoDB

Mongoose

Passport.js (Authentication)

Frontend

EJS (Server-Side Rendering)

Bootstrap

Leaflet.js (Maps & Location Display)

Integrations & Tools

Cloudinary (Image Hosting)

Multer (File Upload Handling)

OpenStreetMap (Geocoding Services)

Express-Session & Connect-Flash

📁 Project Architecture
controllers/   → Application logic (Listings, Reviews, Users)
models/        → Mongoose Schemas & Data Models
routes/        → Route Definitions
views/         → EJS Templates (UI Layer)
public/        → Static Assets (CSS, JS)
utils/         → Custom Middleware & Error Handling


The project follows a clean MVC architecture to ensure separation of concerns and maintainability.

🔐 Authentication & Authorization Flow

Only authenticated users can create listings.

Only listing owners can edit or delete their listings.

Reviews are linked to registered users.

Protected routes use middleware-based access control.

🗺️ Map & Location Integration

Each listing stores geographic coordinates using OpenStreetMap geocoding.
Locations are displayed dynamically on an interactive Leaflet map with markers for better visualization.

⚙️ Local Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/saikaislam999/WANDERLUST-PROJECT.git
cd WANDERLUST-PROJECT

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

MONGO_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=your_session_secret

4️⃣ Run the Application
node app.js


Or using nodemon:

nodemon app.js

5️⃣ Access the Application
http://localhost:3000

👨‍💻 Developer

Developed with focus on backend architecture, authentication security, and scalable project structure.
