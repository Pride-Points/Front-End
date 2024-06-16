import "./searchContentEmpresa.css";
import React, { useState } from "react";
import CardUsuario from "./CardUsuario.jsx";

import iconLupa from "../../assets/search-icon.svg";
import iconFiltro from "../../assets/icon_filter.svg";
import background from "../../assets/backgroundReviews.png";
import starbucks from "../../assets/starbucks.png";
import CardReview from "./CardReview.jsx";
import Modal from "react-modal";

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

function SearchContentEmpresa(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (
    <div className="SearchContentEmpresa">
      <div className="top">

        <div className="searchBar">
          <input type="text" placeholder="Pesquisar" className="barInput" />
          <span className="searchIcon">
            <img src={iconLupa} alt=" ícone de busca" />
          </span>
        </div>


      </div>

      <div className="bottom">
  {props.eventos.length > 0 && (
    props.eventos.map((evento, index) => (
      props.isClickable ? (
        <button>
          <CardUsuario
            key={index}
            id={evento.id}
            img={evento.imgEvento}
            titulo={evento.nome}
            descricao={evento.descricaoEvento}
            data={evento.dtEvento}
          />
        </button>
      ) : (
        <CardUsuario
          key={index}
          id={evento.id}
          img={evento.imgEvento}
          titulo={evento.nome}
          descricao={evento.descricaoEvento}
          data={evento.dtEvento}
          isClickable={false}
        />
      )
    ))
  )}
</div>

      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
        onRequestClose={closeModal}
      >

        <CardReview
          closeModal={closeModal}
          backgroundModal={background}
          localName="Starbucks 4.1"
          mainImage={starbucks}
          reviews={props.reviews}
        />
      </Modal>
    </div>
  );
}

export default SearchContentEmpresa;
