
const  Sequelize  = require('sequelize');

const connection = require('../database/database');


const modelTenis = connection.define(
    'tbl_tenis',
    {
        nome_produto:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        preco_produto: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        modelo_tenis:{
            type: Sequelize.STRING(200),
            allowNull: false
        },
        marca_tenis:{
            type: Sequelize.DATE(6),
            allowNull: false
        },

    }
)

//modelTenis.sync({force:true});

module.exports = modelTenis;