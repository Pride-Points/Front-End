import axios from 'axios';
import "./popUpLocais.css"
import IconePesquisa from '../../../assets/IconePesquisa.png';
import estrelas from '../../../assets/estrela.png';


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUpLocais(props) {


  const armazenarIdEmpresa = (idEmpresa, nomeFantasia) => {
    // Armazena o ID da empresa no sessionStorage
    sessionStorage.setItem('idEmpresaClicada', idEmpresa);
    sessionStorage.setItem('nomeFantasiaClicada', nomeFantasia);
  };
  const [enderecoPesquisado, setEnderecoPesquisado] = useState('');
  const [sugestoesEnderecos, setSugestoesEnderecos] = useState([]);
  const [coordenadas, setCoordenadas] = useState(null);

  const buscarCoordenadas = async (endereco) => {
    try {
      const accessToken = 'pk.eyJ1IjoiZHNvdWdsYSIsImEiOiJjbG9tZzJkMTAwdHZiMmpwcDQzNHUwY3BtIn0.Yw5Jia_cH0bDbfHp_XWO7g'; // Substitua pelo seu token da Mapbox
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(endereco)}.json?access_token=${accessToken}`);

      if (response.data && response.data.features && response.data.features.length > 0) {
        const { center } = response.data.features[0];
        console.log(response.data.features[0])
        // Guarda as coordenadas na variável de estado
        setCoordenadas({ latitude: center[1], longitude: center[0] });

      } else {
        console.log('Endereço não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar coordenadas:', error);
    }
  };

  const buscarSugestoesEnderecos = async (termo) => {
    try {
      const accessToken = 'pk.eyJ1IjoiZHNvdWdsYSIsImEiOiJjbG9tZzJkMTAwdHZiMmpwcDQzNHUwY3BtIn0.Yw5Jia_cH0bDbfHp_XWO7g'; // Substitua pelo seu token da Mapbox
      const countryFilter = '&country=BR'; // Filtro para o Brasil

      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(termo)}.json?access_token=${accessToken}${countryFilter}`);

      if (response.data && response.data.features) {
        const sugestoes = response.data.features
          .filter((feature) => feature.place_type.includes('poi') || feature.place_type.includes('address'))
          .map((feature) => ({
            id: feature.id,
            nome: feature.text,
            categoria: feature.properties.category,
            endereco: feature.place_name,
          }));

        // Atualiza as sugestões de endereços
        setSugestoesEnderecos(sugestoes);
      } else {
        setSugestoesEnderecos([]);
      }
    } catch (error) {
      console.error('Erro ao buscar sugestões de endereços:', error);
      setSugestoesEnderecos([]);
    }
  };
  

  const handlePesquisar = () => {
    buscarCoordenadas(enderecoPesquisado);
  };

  const handleSelecionarSugestao = (endereco, latitude, longitude) => {
    setEnderecoPesquisado(endereco);
    // Chama a função para mover o mapa para as coordenadas selecionadas
    buscarCoordenadas(endereco);
  };

  const handleInputChange = (event) => {
    const novoEndereco = event.target.value;
    setEnderecoPesquisado(novoEndereco);

    if (novoEndereco.length > 0) {
      buscarSugestoesEnderecos(novoEndereco);
    } else {
      setSugestoesEnderecos([]);
    }
  };



  return (

    <div className="popUp">
      <div className="barraPesquisa">
        <div className="barra">
          <input
            type="text"
            className="inputBarra"
            value={enderecoPesquisado}
            onChange={handleInputChange}
          />
          <div className="iconeLupa" onClick={handlePesquisar}>
            <img src={IconePesquisa} alt="icone de pesquisar (Uma Lupa)" />
          </div>
        </div>
   
      </div>

  
      <div className="containerOpcoes">
        <div className="opcoes selecionada">
          <Link to="/home-usuario" style={{ textDecoration: 'none', color: 'black' }}>Locais</Link>

        </div>
        <div className="opcoes">
          <Link to="/home-usuario-eventos-locais" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>

        </div>
      </div>
      <div className="containesLocais">
        {props.listaEmpresas.map((empresa) => (
          <Link
            onClick={() => armazenarIdEmpresa(empresa.id, empresa.nomeFantasia)}
            key={empresa.id}
            to="/home-usuario-avaliacoes"
            style={{ textDecoration: 'none', color: 'black' }}
            className="containerLocal"
          >
            <div className="containerlocalCima">
              <div className="tituloLocal">{empresa.nomeFantasia}</div>
              <div className="estrelasLocal">
                    Av. Paulista
              </div>
            </div>
            <div className="descricaoLocal">
              <p>Cidade: {empresa.cidade}</p>
              <p>Estado: {empresa.estado}</p>
              {/* Adicione outras informações conforme necessário */}
            </div>
          </Link>
        ))}
        {/* <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
          <div className="containerlocalCima">
            <div className="tituloLocal">
              empresa.nome
            </div>
            <div className="estrelasLocal">
              <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
            </div>
          </div>
          <div className="descricaoLocal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
          </div>
        </Link>
        <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
          <div className="containerlocalCima">
            <div className="tituloLocal">
              empresa.nome
            </div>
            <div className="estrelasLocal">
              <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
            </div>
          </div>
          <div className="descricaoLocal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
          </div>
        </Link>
        <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
          <div className="containerlocalCima">
            <div className="tituloLocal">
              empresa.nome
            </div>
            <div className="estrelasLocal">
              <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
            </div>
          </div>
          <div className="descricaoLocal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
          </div>
        </Link>
        <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
          <div className="containerlocalCima">
            <div className="tituloLocal">
              empresa.nome
            </div>
            <div className="estrelasLocal">
              <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
            </div>
          </div>
          <div className="descricaoLocal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
          </div>
        </Link>
        <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
          <div className="containerlocalCima">
            <div className="tituloLocal">
              empresa.nome
            </div>
            <div className="estrelasLocal">
              <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
            </div>
          </div>
          <div className="descricaoLocal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
          </div>
        </Link> */}

      </div>
    </div>

  );
}

export default PopUpLocais;