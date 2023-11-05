// ... (código anterior)
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Modal from "react-modal";

import Header from './components/telaConfigurações/header'; 
import Sidebar from './components/telaConfigurações/menuLateral'; 
import ConteudoPrincipal from './components/telaConfigurações/conteudoPrincipal'; 
import Forms from './components/telaConfigurações/forms'; 


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="App">
      <Header openModal={openModal} />
      <Home />
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
        onRequestClose={closeModal}
      >
        aaaaaaaaa
      </Modal>

    </div>
  );
}

export default App;
