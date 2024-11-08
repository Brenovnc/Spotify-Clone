import { addSong, listSong, removeSong } from "../controllers/songController.js";
import express from 'express';
import upload from "../middleware/multer.js";

const songRouter = express.Router(); // Com isso podemos criar múltiplas API's

// para acessar essa rota, usaremos a rota definida no server.js mais essas abaixo
songRouter.post('/add', upload.fields([{name: 'image',maxCount:1},{name:'audio',maxCount:1}]), addSong);  // rota completa: ../api/song/add
songRouter.get('/list', listSong); // rota completa: ../api/song/list
songRouter.post('/remove', removeSong); // rota completa: ../api/song/remove

export default songRouter;