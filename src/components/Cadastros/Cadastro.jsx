import "./Cadastro.css";
import CadastroEsq from "./CadastroEsq";
import CadastroDire from "./CadastroDire";
import logoPride from "../../assets/logo.png";
import barraProgressoInicio from "../../assets/progress-inicio.png";
import barraProgressoDois from "../../assets/progress-dois.png";
import imgFormUser from "../../assets/img-form-usuario.png";
import { Link } from 'react-router-dom';

function Cadastro(props) {


  const renderizarComponente = () => {
    const minhaTag = <Link className="login" to="/login">Faça login</Link>;

    if (props.mostrarSegundaParteCad) {
      return (
        <CadastroDire
          quantity={props.quantityDois}
          barraProgresso={barraProgressoDois}
          barraProgressoMT={props.MTbarraDois}
          barraProgressoMB={props.MBbarraDois}
          inputTitles={props.inputTitlesDois}
          titulo={props.tituloDois}
          tituloBotao={props.tituloBotaoDois}
          subtitulo={props.subtituloDois}
          textoFinalUm="Já possui conta?"
          tagTextoFinal={minhaTag}
          handleButtonClick={props.cadastrarDois}
        />
      );
    } else {
      return (
        <CadastroDire
          quantity={props.quantityUm}
          barraProgresso={barraProgressoInicio}
          barraProgressoMT={props.MTbarraUm}
          barraProgressoMB={props.MBbarraUm}
          inputTitles={props.inputTitlesUm}
          titulo={props.tituloUm}
          subtitulo={props.subtituloUm}
          tituloBotao={props.tituloBotaoUm}
          textoFinalUm="Já possui conta?"
          tagTextoFinal={minhaTag}
          handleButtonClick={props.cadastrarUm}
        />
      );
    }
  };

  return (
    <div className="Cadastro">
      <CadastroEsq
        logo={logoPride}
        widthLogo={215}
        heightLogo={112}
        imgForm={imgFormUser}
        widthImgForm={410}
        heightImgForm={441}
      />
      {renderizarComponente()}
    </div>
  );
}

export default Cadastro;
