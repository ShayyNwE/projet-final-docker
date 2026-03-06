const express = require('express');
const app = express();
require('dotenv').config();

const produitsRouter = require('./routes/produits');
const { health } = require('./controllers/produitController');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/health', health);
app.use('/produits', produitsRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

module.exports = app;