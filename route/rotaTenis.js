
const express = require('express');
const modelCliente = require('../model/modelTenis');

// Gerenciado de rotas do express
const router = express.Router();

// Rota para cadastrar cliente
router.post('/cadastrarTenis', (req, res)=>{
    console.log(req.body);
    let {nome_tenis} = req.body;
    modelTenis.create(

        {nome_tenis}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"TÊNIS INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR TÊNIS.",
                errorObject:error
            });
        }
    );
})


//Rota para listar cliente
router.get('/listarTenis', (req, res)=>{


    modelTenis.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"TODOS OS TÊNIS FORAM LISTADOS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR OS TÊNIS",
                    errorObject:error
                });
            }
        );
})


router.get('/listarTenisNOME/:nome_Tenis', (req, res)=>{

    let {nome_Cliente} = req.params;

    modelTenis.findOne({attributes:['id_Tenis', 'nome_Tenis'],where:{nome_Tenis}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"TÊNIS LISTADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR OS TÊNIS",
                errorObject:error
            });
        }
    )

});


router.put('/alterarTenis', (req, res)=>{

    const {cod_Tenis, nome_Tenis} = req.body;

    modelCliente.update(
        {nome_Tenis},
        {where:{cod_Tenis}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"TÊNIS ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O TÊNIS.",
                errorObject:error
            });
        }
    );
})




router.get('/listarClientePK/:id_Tenis', (req, res)=>{

    // Declarar e receber o dado do código de clientes
    let {cod_Tenis} = req.params;

    // Ação de seleção do sql
    modelTenis.findByPk(id_Tenis)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CÓDIGO DO TÊNIS FOI LISTADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR O TÊNIS.",
                errorObject:error
            });
        }
    )

});

module.exports = router;