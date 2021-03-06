import crypto from 'crypto-js';

import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


app.get('/', async (req, resp) => {
    try {
            let r = await db.infoc_atn_tb_pessoal.findAll();        
            delete r.ds_senha;       
            resp.send(r)
    } catch (e){
        resp.sendStatus(500)
        console.log(e)
    }
})

app.get('/:id', async(req, resp) =>{
    try{
        let { id } = req.params;
        let r = await db.infoc_atn_tb_pessoal.findOne({where:{id_pessoal:Number(id)}})

        delete r.ds_senha;
        resp.send(r);
    } catch (e){
        resp.sendStatus(500)
        console.log(e)
    }
})



app.post('/', async (req, resp) =>{
    try{
        let {nome, area, cargo, telefone, estado_cidade, email, senha, assinatura, confirmar_senha} = req.body;
        if(senha != confirmar_senha){
            resp.send({erro:'ambas as senhas tem que ser iguais'});
            return;
        }

        let v = await db.infoc_atn_tb_empresa.findOne({where: {ds_email:email}});
        let v2 = await db.infoc_atn_tb_pessoal.findOne({where:{ds_email:email}});
        if(v || v2){
            resp.send({erro:'Este endereço e-mail já esta sendo utilizado por uma empresa ou usuario'});
            return;
        }

        let r = await db.infoc_atn_tb_pessoal.create({nm_nome:nome, ds_area:area, ds_cargo:cargo, nr_telefone:telefone, ds_estado_cidade:estado_cidade, ds_email:email, ds_codigo_rec:'' ,ds_senha: crypto.SHA256(senha).toString(crypto.enc.Base64), bl_assinatura:assinatura});
        
        let s = await db.infoc_atn_tb_configuracoes_pessoais.create({id_pessoal: r.id_pessoal, ds_sobre:"", ds_idioma1:"", ds_idioma2:"", ds_idioma3:"", ds_linkedin:"", ds_instagram:"", ds_twiter:"", ds_vagas_interesse1:"", ds_vagas_interesse2:"", ds_vagas_interesse3:"", ds_esperiencias:"", ds_formacoes_academicas:"", ds_link_imagem:""/*,id_curriculo: 0*/})

        resp.sendStatus(200)



        
    } catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})


app.delete('/:id', async(req, resp) =>{
    try{
        const {id} = req.params;
        let r = await db.infoc_atn_tb_pessoal.destroy({where:{id_pessoal:id}})
        resp.sendStatus(200)
    } catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})

app.put('/:id', async (req, resp) =>{
    try{
        let {nome, area, cargo, telefone, estado_cidade, email, confirmar_senha, assinatura} = req.body;
        console.log(cargo)
        let {id} = req.params;
        let r = await db.infoc_atn_tb_pessoal.update({nm_nome:nome, ds_area:area, ds_cargo:cargo, nr_telefone:telefone, ds_estado_cidade:estado_cidade, ds_email:email, ds_senha: confirmar_senha, bl_assinatura:assinatura}, {where:{id_pessoal:id}});
        resp.sendStatus(200)
    }catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})


export default app;