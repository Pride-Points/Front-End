// ... (código anterior)
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Modal from "react-modal";
import imgUser from "../assets/img-usuario.png";
import imgNegocio from "../assets/img-negocio.png";
import ScrollToTop from "react-scroll-up";

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

function LandingPage() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="App">
      <Header openModal={openModal} />
      <ScrollToTop
        showUnder={300}
        style={{
          position: "fixed",
          bottom: 50,
          right: 30,
          cursor: "pointer",
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0s",
          zIndex: 999,
        }}
      >
        <span>UP</span>
      </ScrollToTop>
      <Home />
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
        onRequestClose={closeModal}
      >
        <Card
          isOpen={closeModal}
          titulo="Cadastre-se como"
          tituloFirstCard="Um participante comum"
          imgFirstCard={imgUser}
          tituloSecondCard="Um participante dono de um negócio"
          imgSecondCard={imgNegocio}
        />
      </Modal>
    </div>
  );
}

export default LandingPage;
