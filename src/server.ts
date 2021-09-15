//Requisições do Pacote Express
import express, {Request,Response} from "express";
import mainRouter from './routes/index';
import painelRouter from './routes/painel';
import path from 'path';
const server = express();

//Deixa os arquivos da pasta public serem acessados --- dirname serve para pegar o diretorio raiz
server.use(express.static(path.join(__dirname, '../public')));
//Requer as rotas principais
server.use('/',mainRouter);

//Requer as rotas do painel
server.use('/painel', painelRouter);

//Rota de erro 404
server.use((req:Request, res:Response )=>{
    res.status(404).send('Pagina Não Encontrada');
});
server.listen(3000);
