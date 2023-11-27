import React from 'react';
import StarRating from './starRating'; // Importa o componente de avaliação
import LogoImg from '../../assets/logo-dark.svg';
import IconBack from '../../assets/icon-back.png';
import SearchIcon from '../../assets/search-icon.svg';
import { useNavigate } from 'react-router-dom';


function CommentSection() {
    const comentarios = [
        { nome: 'Bar da juju', avaliacao: 4, conteudo: 'Bar descontraído e intimista com carnes na brasa e petiscos seletos tem telão esportivo e temática da bola.' },
        { nome: 'Bar do Vado', avaliacao: 5, conteudo: 'Comida boa e muita musica, a melhor experiencia para você.' },
        { nome: 'Zig Club', avaliacao: 3, conteudo: 'Muita festa e diversão, somos a sua felicidade em meio aos terrores noturnos.' },
        { nome: 'Bjork`s bar', avaliacao: 4, conteudo: 'Experiencia unica e experimental, aqui você vê de tudo um pouco e entende de tudo um pouco.' },
        { nome: 'Bar do zé', avaliacao: 4, conteudo: 'Temos cachaça por 1 real e muita experiencia.' }
    ];

    const navigate = useNavigate();

    // Função para voltar para a página anterior
    const voltarParaPaginaAnterior = () => {
        navigate(-1); // Navegar para trás no histórico
    };

    return (
        <div className='container-coments'>
            <header className='header'>
                <button className='button'>
                    <img src={IconBack} width="18px" height="26px" alt="botão de retornar a pagina inicial" onClick={voltarParaPaginaAnterior} />
                </button>
                <img src={LogoImg} alt=" logo da pride points (bandeira lgbt e frase pride points)" className="logo-pride" />
            </header>

            <div className='comment'>
                <div className="search-container">
                    <input type="text" placeholder="Pesquisar" className="search-input" />
                    <span className="search-icon">
                        <img src={SearchIcon} alt=" ícone de busca" />
                    </span>
                </div>

                <h1 className='locais'>Locais</h1>


                <div className='descript'>
                    {comentarios.map((comentario, index) => (
                        <div key={index} className="comments-descript">
                            <h4 className='coment-name'>{comentario.nome}</h4>
                            <StarRating rating={comentario.avaliacao} />
                            <p>{comentario.conteudo}</p>
                        </div>
                    ))}
                </div>

                <h3>© 2023 PridePoints. Todos os direitos reservados.</h3>

            </div>

        </div>
    );
}

export default CommentSection;
