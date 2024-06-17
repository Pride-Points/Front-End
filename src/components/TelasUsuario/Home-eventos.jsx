import "./home-locais.css"
import MenuLateral from "./MenuLateral/MenuLateral.jsx"
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario.jsx"
import Pointer from "../../assets/icone-Pointer.png"
import MapSection from './MapSection.jsx';
import PopUpEventos from './PopUp/popUpEventosGeral.jsx'

function Home() {

    return (
        <div className="container">

            <div className="content-left">
                <MenuLateral />
            </div>

            <div className="content-right">
                <HeaderUsuario />
                <main className="content-up">
                    <div className="tituloHome">
                        <div className="containerTitulo">
                            <h1>Olá, {sessionStorage.usuario}</h1>
                            <div className="subtituloHome">Encontre lugares inclusivos para você</div></div>

                        <div className="botaoPaulista">
                            <div className="borda">
                                <div>
                                    <img src={Pointer} alt="icone de localização Roxo" />
                                </div>
                                <div className="texto">
                                    SP / Av.Paulista
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mapaHome">
                        <div className="mapa">
                            <MapSection />
                        </div>
                        <div className="teste">
                            <PopUpEventos />
                        </div>
                    </div>
                </main>
            </div>

        </div>
    );
}

export default Home;