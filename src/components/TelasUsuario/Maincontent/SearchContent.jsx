import React, { useState } from "react";
import "./searchContent.css";
import CardUsuario from "./CardUsuario.jsx";
import StarRating from "../PopUp/estrelas.js"; // Certifique-se de ajustar o caminho para o seu componente StarRating
import iconLupa from "../../../assets/lupa-icon.svg";
import iconFiltro from "../../../assets/icon_filter.svg";
import Modal from "react-modal";
import CardReview from "./CardReview.jsx";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "810px",
    height: "499px",
    bottom: "auto",
    borderRadius: "12px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function SearchContent(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="SearchContent">
      <div className="top">
        <div className="search">
          <input type="text" placeholder="Pesquisar" />
          <img src={iconLupa} alt="icone lupa" />
        </div>

        <div className="filtro">
          <button>
            <img src={iconFiltro} alt="icone filtro" />
            Filtrar
          </button>
        </div>
      </div>

      <div className="bottom testee">
        {props.eventos &&
          props.eventos.map((evento, index) => (
            <div key={index}>
              {props.isClickable ? (
                <button onClick={openModal}>
                  <CardUsuario
                    img={evento.imgEvento}
                    titulo={evento.titulo}
                    descricao={evento.descricao}
                    info={<StarRating rating={evento.info} />} // Aqui modificamos para renderizar o componente StarRating
                    data={evento.data}
                  />
                </button>
              ) : (
                <CardUsuario
                  img={evento.img}
                  titulo={evento.titulo}
                  descricao={evento.descricao}
                  info={<StarRating rating={evento.info} />} // E aqui também
                  data={evento.data}
                />
              )}
            </div>
          ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
        onRequestClose={closeModal}
      >
        <CardReview closeModal={closeModal} reviews={props.reviews} />
      </Modal>
    </div>
  );
}

export default SearchContent;
