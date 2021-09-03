//Requisições do Pacote Express
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

//define o server
const server = http.createServer(app);

//cria o servidor
server.listen(3000);

//ler os aquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')));
