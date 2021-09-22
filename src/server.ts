//Requisições do Pacote Express
import express, {Request,Response} from "express";
import mainRouter from './routes/index';
import painelRouter from './routes/painel';
import path from 'path';
import mustache from "mustache-express";



const server = express();

server.set('view engine', 'mustache');
//Seta onde estao os arquivos html
server.set('views',path.join(__dirname, 'views'));
server.engine('mustache',mustache());
//Deixa os arquivos da pasta public serem acessados --- dirname serve para pegar o diretorio raiz
server.use(express.static(path.join(__dirname, '../public')));
//URLEncode
server.use(express.urlencoded({extended: true}));
//Requer as rotas principais
server.use('/',mainRouter);

//Requer as rotas do painel
server.use('/painel', painelRouter);


//URL Decode

//Rota de erro 404
server.use((req:Request, res:Response )=>{
    res.status(404).send('Pagina Não Encontrada');
});
server.listen(3000);
