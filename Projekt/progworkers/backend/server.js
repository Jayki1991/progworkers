const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const fakeUser = {
  email: 'test@example.com',
  password: 'password123'
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === fakeUser.email && password === fakeUser.password) {
    res.json({ message: 'Login erfolgreich', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Ungültige Anmeldedaten' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend läuft auf http://localhost:${PORT}`);
});
