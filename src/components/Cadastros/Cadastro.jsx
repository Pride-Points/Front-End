import "./Cadastro.css";
import CadastroEsq from "./CadastroEsq";
import CadastroDire from "./CadastroDire";
import logoPride from "../../assets/logo.png"
import imgFormUser from "../../assets/img-form-usuario.png"

function Cadastro(){
    return (
        <div className="Cadastro">
            <CadastroEsq logo={logoPride}
            widthLogo={215}
            heightLogo={112}
            imgForm={imgFormUser}
            widthImgForm={410}
            heightImgForm={441}/>
         {/* passando como parametro a quantidade de inputs que quero gerar no componente e passando seus respectivos titulos */}
            <CadastroDire quantity={3}
            inputTitles={['Nome', 'Gênero', 'Orientação Sexual']}
            titulo="Seja Membro!"
            subtitulo="Faça parte do projeto e aproveite benefícios exclusivos."/>
        </div>
    )
}

export default Cadastro;