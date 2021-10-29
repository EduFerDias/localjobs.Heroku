import styled from 'styled-components'

const Conteudo = styled.div`
    background-color: #404756;
    color: white;

    font-family: Montserrat-regular;

    .p19-form{
        padding: 3em 15em;
    }

    .l1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .l1-image img{
        width: 10em;
    }

    .l1-interac{
        display: flex;
        flex-direction: column;
        padding-top: 10px;
    }
    .l1-input, .l1-select{
        display: flex;
        flex-direction: row;
        margin: 8px;
        width: 30rem;
        justify-content: space-between;

        font-size: 2em;
        font-family: Montserrat-Bold;
    }
    .l1-input input{
        width: 75%;
        height: 100%;
        border-radius: 5px;
        border:none;
    }
    .l1-select select{
        font-family: Montserrat-Bold;
        width: 75.6%;
        height: 100%;
        border-radius: 5px;
        border:none;

        background-image: url("./assets/images/Pagina19/perfil-de-usuario 3.png");
        background-position: right;
        background-repeat: no-repeat;
        background-size: 10%; 

        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;

    }
    .l1-select select:focus{
        background-image: url("./assets/images/Pagina19/perfil-de-usuario180.png");
    }
    .l2{
        display: flex;
        flex-direction: row;
        font-family: Montserrat-Bold;
        font-size: 1.5rem;
    }
    .l2-interac{
        display: flex;
        flex-direction: column;
        height: 2.3em;
        margin-right: 2em;
    }
    .l2-interac input{
        height: 100%;
        width: 15em;
        border: none;
        border-radius:5px;
    }
    .l2-interac select{
        height: 100%;
        width: 15em;
        border: none;
        border-radius:5px;

        background-image: url("./assets/images/Pagina19/perfil-de-usuario 3.png");
        background-position: right;
        background-repeat: no-repeat;
        background-size: 10%; 

        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    .l2-interac select:focus{
        background-image: url("./assets/images/Pagina19/perfil-de-usuario180.png");
    }
    .l3{
        padding-top: 30px;
    }
    .l3-desc{
        width:100%;
        font-family: Montserrat-Bold;
        font-size: 1.5em;
    }
    .l3-desc textarea{
        resize:none;
        border:none;
        font-family: Montserrat-regular;
        margin-top: 1em;
        border-radius: 5px;
        width:100%;
        height:15em;
    }
    .l3-inputs{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 0.5em;
    }
    .l3-input{
        display:flex;
        flex-direction: column;
        font-family: Montserrat-Bold;
        font-size: 1.5em;

        padding-right: 35px;
    }
    .l3-input input{
        width: 23em;
        height: 2.3em;

        margin-top: 1em;

        border-radius: 5px;
        border:none;
    }
    .chat-vagas{
        padding: 0px 13em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .vagas-titulo{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: Montserrat-Bold;
    }
    .vagas-titulo img{
        width: 3rem;
        margin-right: 1em;
    }

    .box-vaga{
        display: flex;
        flex-direction: column;
        padding: 0.5em;
        margin: 1em 0px;
        background-color: #107AD1;
        border-radius: 5px;
    }
    .box-titulo{
        font-family: Montserrat-Bold;
        font-size: 1.4em;
    }
    .box-paragrafo{
        font-size: 0.85em;
        padding: 0.5em 0px;
    }
    .veja-m{
        text-decoration:underline;
        font-family: Montserrat-Bold;
    }


    .msg-titulo{
        font-size: 2em;
        padding: 1em 0 1em 0 ;
        font-family: Montserrat-Bold;
    }
    .box-mensagem{
        background-color: #2A3244;
        border-radius: 20px;
        width: 30vw;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .usuario-chat{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: Montserrat-Bold;
        padding-left: 0.5em;
        padding-top: 0.5em;
    }
    .usuario-chat img{
        height: 80px;
        padding-left: 0.5em;
    }
    .box-mensagem-meio{
        padding-left: 27px;
    }
    .Box-seta{
        padding-left: 26.9em;
        padding-top: 1em;
    }
    .Box-seta img{
        height: 40px;
        background-color: #5F6779;
        border-radius: 100%;
    }

    .box-mensagem-baixo{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0em 0em 0.8em 0.8em;
    }

    .box-mensagem-baixo img{
        margin-left: 0.5em;
        height: 40px
    }

    .box-mensagem-baixo input{
        border-radius: 50px;
        border: none;
        background-color: #107AD1;
        width: 80%;
        height: 40px;
        color: white;
        font-size: 1em;
        font-family: Montserrat-regular;
        padding-left: 20px;
    }

    .box-mensagem-baixo input::placeholder{
        color: white;
    }

    .gerenc-perf{
        padding:2em 13em;
    }
    .gerenc-titulo{
        font-family: Montserrat-Bold;
        font-size: 2em;
    }

    .recib{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2.5em 0em 2.5em 1em;
    }
    .lkn-titulo, .cv-titulo{
        font-family: Montserrat-Bold;
        font-size: 1.7rem;
        padding-bottom: 1em;
    }
    .linkedin-box, .curriculo-box{
        display:flex;
        flex-direction:row;
        align-items:center;

        margin: 0.625em 0px;

        background-color: #107AD1;
        border-radius: 5px;
    }
    .lkn-titulo{
        padding-left: 1rem;
    }
    .nm_vaga{
        padding-left: 0.5em;
    }
    .nome{
        font-family: Montserrat-Bold;
        font-size: 1.5em;
    }
    .vaga{
        font-size: 1em;
    }

    .gerenc-buttons{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-left:1.2em;
    }
    .gerenc-buttons button{
        border:none;
    }
    .save{
        background-color: #107AD1;
        font-family: Montserrat-Bold;
        color:white;

        font-size: 1em;
        padding: 0.25em;
        border-radius:5px;

        width:8em;
        transition: 0.5s;
    }
    .save:hover{
        background-color: #1294ff;
    }
    .delete{
        font-family: Montserrat-Bold;
        font-size: 1em;

        width:8em;
        padding: 0.25em;

        border-radius: 5px;
        background-color: darkred;
        color: white;
        transition: 0.5s;
    }
    .delete:hover{
        background-color: red;
    }

    .notificacao-e{
        visibility:hidden;
    }
    .notificacao{
        background-color: royalblue;
        border-radius: 100%;
        padding: 0.2em 0.5em;
        font-family: Montserrat-Bold;
        font-size: 0.8em;
    }

`

export default Conteudo;