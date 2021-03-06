import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


app.get('/', async(req, resp) =>{
    try{
        let r = await db.infoc_atn_tb_configuracoes_pessoais.findOne();
        resp.send(r);
    } catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})
app.get('/:id', async(req, resp) =>{
    try{
        let { id } = req.params;
        let r = await db.infoc_atn_tb_configuracoes_pessoais.findOne({where:{id_pessoal:id}});
        resp.send(r);
    } catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})

app.put('/:id', async(req, resp) =>{
    try{
        const {id} = req.params;
        const {sobre, idioma1, idioma2, idioma3, likedin, instagram, twitter, vaga_interesse1, vaga_interesse2, vaga_interesse3, experiencias, formacoes_academicas, link_imagem} = req.body;
        let r = await db.infoc_atn_tb_configuracoes_pessoais.update({ds_sobre:sobre, ds_idioma1:idioma1, ds_idioma2:idioma2, ds_idioma3:idioma3, ds_linkedin:likedin, ds_instagram:instagram, ds_twiter:twitter, ds_vagas_interesse1:vaga_interesse1, ds_vagas_interesse2:vaga_interesse2, ds_vagas_interesse3:vaga_interesse3, ds_esperiencias:experiencias, ds_formacoes_academicas:formacoes_academicas, ds_link_imagem:link_imagem/*,id_curriculo: 0*/},{where:{id_pessoal:id}})
        resp.sendStatus(201)
    }catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})

export default app;