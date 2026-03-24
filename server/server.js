require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoute = require('./routes/contact');
const competitiveRoute = require('./routes/competitive');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load env vars
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

// Database connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoute);
app.use('/api/competitive', competitiveRoute);

app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
