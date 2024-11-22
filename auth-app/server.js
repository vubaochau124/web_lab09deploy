// /auth-app/server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });
  res.json({ token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});