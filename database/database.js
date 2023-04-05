//Importa diretamente o sequelize
const Sequelize = require('sequelize');

/*  CRIA A CONEXÃO CON O BANCO DE DADOS
Linha nº 10 = Nome do banco
Linha nº 11 = Usuario do banco
Linha nº 12 = Senha do banco
*/
const connection = new Sequelize(
    'bd_lojatenis_api', 
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        timezone: '-03:00',
        port: 3307
    }
);

module.exports = connection;