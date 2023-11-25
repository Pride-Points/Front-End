import "./home.css";
import ImgHome from "../../assets/img-home.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link as ScrollLink} from 'react-scroll';
AOS.init();

function MainSection() {
  return (
    <div className="mainSection">
      <div className="text">
        <h1>Encontre lugares que celebram a diversidade!</h1>
        <p>
          Faça parte da mudança que deseja ver. Avalie e compartilhe suas
          histórias enquanto explora locais incríveis e com segurança ou expanda
          o público do seu estabelecimento e o torne um lugar inclusivo.
        </p>

        <ScrollLink to="WelcomeSection" smooth={true} duration={500} offset={-500}><button>Conheça</button></ScrollLink>
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="imgHome">
        <img src={ImgHome} title="Imagem de uma mulher vendo o mapa" alt="Imagem de uma mulher vendo o mapa" />
      </div>
    </div>
  );
}

export default MainSection;
