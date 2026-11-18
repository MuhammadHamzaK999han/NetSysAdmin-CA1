const express = require('express');
const app = express();

app.use(express.json());

const VERSION = '1.0.0';

app.get('/', (req, res) => {
  res.send('<h1>CI/CD Demo App</h1><p>Deployed automatically via GitHub Actions</p><p>Version: ' + VERSION + '</p>');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

app.get('/api/info', (req, res) => {
  res.status(200).json({
    app: 'cicd-webapp',
    version: VERSION,
    author: 'Muhammad Hamza Khan',
    module: 'B9IS121'
  });
});

app.post('/api/echo', (req, res) => {
  res.status(201).json({ received: req.body });
});

module.exports = app;