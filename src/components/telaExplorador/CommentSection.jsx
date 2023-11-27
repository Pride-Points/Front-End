
import StarRating from './starRating'; // Importa o componente de avaliação
import LogoImg from '../../assets/logo-dark.svg';
import IconBack from '../../assets/icon-back.png';
import SearchIcon from '../../assets/search-icon.svg';

import PopUpLocaisExplorador from '../telaExplorador/PopUpLocaisExplorador.jsx';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api.js';
import { toast } from 'react-toastify';

import React, { useState, useEffect } from 'react';

function CommentSection() {

    const navigate = useNavigate();

    // Função para voltar para a página anterior
    const voltarParaPaginaAnterior = () => {
        navigate(-1); // Navegar para trás no histórico
    };

    const [listaEmpresa, setListaEmpresa] = useState([]);

    useEffect(() => {
        const carregarEmpresas = async () => {
            try {
                const response = await api.get('/empresas');
                if (response.status === 200 && response.data) {
                    setListaEmpresa(response.data);
                } else {
                    throw new Error('Ops! Ocorreu um erro interno.');
                }
            } catch (error) {
                toast.error(error.message);
            }
        };

        // Chama a função de carregarEmpresas apenas uma vez quando o componente é montado
        carregarEmpresas();
    }, []); // O array vazio indica que este efeito deve ser executado apenas uma vez, equivalente ao componentDidMount


    return (
        <div className='container-coments'>

                <div className="testee">
                    <PopUpLocaisExplorador
                        listaEmpresas={listaEmpresa} />
                </div>

        </div>

        
    );
}

export default CommentSection;
