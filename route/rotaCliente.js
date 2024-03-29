
const express = require('express');
const modelCliente = require('../model/modelCliente');


const router = express.Router();


router.post('/cadastrarCliente', (req, res)=>{
    console.log(req.body);
    let {nome_cliente,celular_cliente,email_cliente,cod_cliente} = req.body;
    modelCliente.create(

        {nome_cliente,celular_cliente,email_cliente,cod_cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O CLIENTE.",
                errorObject:error
            });
        }
    );
})



router.get('/listarCliente', (req, res)=>{


    modelCliente.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"TODOS OS CLIENTES LISTADOS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR OS CLIENTES.",
                    errorObject:error
                });
            }
        );
})

//LISTAR CLIENTE

router.get('/listarClienteNOME/:nome_Cliente', (req, res)=>{

    let {nome_Cliente} = req.params;

    modelCliente.findOne({attributes:['id_Cliente', 'nome_Cliente'],where:{nome_Cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTES LISTADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR CLIENTES.",
                errorObject:error
            });
        }
    )

});

//ALTERAR CLIENTE
router.put('/alterarCliente', (req, res)=>{

    const {cod_cliente, nome_cliente} = req.body;

    modelCliente.update(
        {nome_cliente},
        {where:{cod_cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O CLIENTE.",
                errorObject:error
            });
        }
    );
})



//EXCLUIR CLIENTE
router.delete('/deletarCliente/:cod_Cliente', (req, res)=>{


    console.log(req.params);

    let {cod_Cliente} = req.params

    modelCliente.destroy(
        {where:{cod_Cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE EXCLUIDO DA LISTA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CLIENTE.",
                errorObject:error
            });
        }
    );
});




router.get('/listarClientePK/:cod_cliente', (req, res)=>{

    let {cod_cliente} = req.params;


    modelCliente.findByPk(cod_cliente)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CÓDIGO DE CLIENTE LISTADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR O CLIENTE CATEGORIA.",
                errorObject:error
            });
        }
    )

});

module.exports = router;