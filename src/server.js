
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dicasRoute from './routes/dicasRoute.js';
import participantesRoute from './routes/participantesRoute.js';
import simuladoRoute from './routes/simuladoRoute.js';
import videoAulaRoute from './routes/videoAulaRoute.js';
import noticiaRoute from './routes/noticiaRoute.js';
import usuarioRoute from './routes/usuarioRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/dicas', dicasRoute);
app.use('/participantes', participantesRoute);
app.use('/simulado', simuladoRoute);
app.use('/videoaulas', videoAulaRoute);
app.use('/noticias', noticiaRoute);
app.use('/usuarios', usuarioRoute);

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
