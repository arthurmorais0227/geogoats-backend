import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dicasRoute from './routes/dicasRoute.js';
import participantesRoute from './routes/participantesRoute.js';
import simuladoRoute from './routes/simuladoRoute.js';
import videoAulaRoute from './routes/videoAulaRoute.js';
import noticiaRoute from './routes/noticiaRoute.js';
import usuarioRoute from './routes/usuarioRoute.js';
import temaRoute from './routes/temaRoute.js';
import carreiraRoute from './routes/carreiraRoute.js';
import estagioRoute from './routes/estagioRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/dicas', dicasRoute);
app.use('/participantes', participantesRoute);
app.use('/simulado', simuladoRoute);
app.use('/videoaulas', videoAulaRoute);
app.use('/noticias', noticiaRoute);
app.use('/usuarios', usuarioRoute);
app.use('/temas', temaRoute);
app.use('/carreiras', carreiraRoute);
app.use('/estagios', estagioRoute);

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