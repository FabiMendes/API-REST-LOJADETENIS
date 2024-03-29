
const  Sequelize  = require('sequelize');

const connection = require('../database/database');



const modelCliente = connection.define(
    'tbl_Cliente',
    {
        cod_cliente:{
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        nome_cliente: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        celular_cliente:{
            type: Sequelize.DECIMAL(20),
        },
        email_cliente:{
            type: Sequelize.STRING(30),
            allowNull: false
        }
    }
)

//modelCliente.sync({force:true});

module.exports = modelCliente;

//aaaamendasmetestedeu