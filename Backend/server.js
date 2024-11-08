import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Conectar ao banco de dados e Cloudinary (Ambos disponíveis em src/config)
connectDB();
connectCloudinary();

// Permitir múltiplas origens
const allowedOrigins = [
	'https://spotify-clone-breno-vieira.vercel.app',
	'https://spotify-admin-breno-vieira.vercel.app'
  ];

// Configuração do CORS
app.use(cors({
	origin: (origin, callback) => {
	  if (!origin || allowedOrigins.includes(origin)) {
		callback(null, true);
	  } else {
		callback(new Error('Not allowed by CORS'));
	  }
	},
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

// Middlewares adicionais 
app.use(express.json());

// Inicializando rotas
app.use('/api/song', songRouter);
app.use('/api/album', albumRouter);

// Rota de teste
app.get('/', (req, res) => res.send("API Working"));

// Iniciar o servidor
app.listen(port, () => console.log(`Server started on ${port}`));
