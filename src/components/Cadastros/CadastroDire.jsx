import React, { useState } from 'react';
import imgBack from "../../assets/back.png";
import "./CadastroDire.css";
import barraProgresso from "../../assets/progress-inicio.png"
import { Link, useNavigate} from 'react-router-dom';


function CadastroDire(props){
    const [inputValues, setInputValues] = useState(Array(props.quantity).fill(''));

    const navigate = useNavigate();

      // Função para voltar para a página anterior
      const voltarParaPaginaAnterior = () => {
        navigate(-1); // Navegar para trás no histórico
      };

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
      };

      const inputs = inputValues.map((value, index) => (
        <div key={index} className='input'>
          <label>{props.inputTitles[index]}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
          ));

    return (
        <div className="CadastroDire">
            <div className='imgBack'>
            <img src={imgBack} width={93} height={36} onClick={voltarParaPaginaAnterior}></img>
            </div>
            <div className="barraProgresso">
            <img src={barraProgresso} width={355.98}/>
            </div>
            <div className='containerCadastro'>
                <div className='tituloAndSubtitulo'>
                    <h1>{props.titulo}</h1>
                    <p>{props.subtitulo}</p>
                </div>
            {inputs}
            <div className='buttonClass'>
            <button>Continuar</button>
            <p>Já possuí conta? <a><Link className="login" to="/login">Faça Login</Link></a></p>
            </div>
            </div>
            
        </div>
    )
}

export default CadastroDire;