
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dicasRoute from './routes/dicasRoute.js';
import participantesRoute from './routes/participantesRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/dicas', dicasRoute);
app.use('/participantes', participantesRoute);

app.get('/', (req, res) => {
  res.json({
    mensagem: '✨ API GeoGoats funcionando!',
    status: 'online'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🐐 API rodando em http://localhost:${PORT}`);
});
