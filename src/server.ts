//Requisições do Pacote Express
import express from "express";
import mainRouter from './routes/index';
const server = express();
server.use(mainRouter);
//ler os aquivos da pasta public
/*server.use(express.static(path.join(__dirname, 'public')));*/
server.listen(3000);