const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'dein_geheimer_schluessel'; //anpassen

app.use(cors());
app.use(bodyParser.json());


const fakeUser = {
  email: 'test@example.com',
  password: '123'
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === fakeUser.email && password === fakeUser.password) {
    const token = jwt.sign(
      { email: fakeUser.email },       // Payload
      JWT_SECRET,                      // Secret Key
      { expiresIn: '1h' }              // Token gültig für 1 Stunde
    );
    res.json({ message: 'Login erfolgreich', token: token });
  } else {
    res.status(401).json({ message: 'Ungültige Anmeldedaten' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend läuft auf http://localhost:${PORT}`);
});
