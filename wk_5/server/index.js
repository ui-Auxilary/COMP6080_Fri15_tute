import express from 'express';
import jwt from 'jsonwebtoken';

const BACKEND_PORT = 5005;
const TERRIBLE_SECRET = 'dontexposeme';

const app = express();
app.use(express.json());

const db = {};

const getUserIdFromEmail = (email) => {
  return Object.keys(db).find((id) => db[id].email === email);
};

app.get('/feeds', (req, res) => {
  res.json([]);
});

app.post('/register', (req, res) => {
  const userId = Object.keys(db).length + 1;
  const { email, password, name } = req.body;
  console.log('Received', email, password, name);
  db[userId] = {
    email,
    password,
    name,
  };

  res.json({
    token: jwt.sign({ userId }, TERRIBLE_SECRET, { algorithm: 'HS256' }),
    userId: parseInt(userId, 10),
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const id = getUserIdFromEmail(email);
  if (password === db[id].password && id !== undefined) {
    res.json({
      token: jwt.sign({ userId }, TERRIBLE_SECRET, { algorithm: 'HS256' }),
      userId: parseInt(userId, 10),
    });
  } else res.status(404);
});

app.get('/', (req, res) => {
  console.log('Hello');
  res.json('Hello world');
});

app.listen(BACKEND_PORT, () => {
  console.log(`Listening on ${BACKEND_PORT}`);
});
