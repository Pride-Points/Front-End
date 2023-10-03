import "./footer.css";
import ImgPc from "../../assets/img-pc.png";
import ImgCelular from "../../assets/img-celular.png";
import Logo from "../../assets/logo.png";
import IconFacebook from "../../assets/icon-facebook.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconInstagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="content-top">
        <div className="pc">
          <img
            src={ImgPc}
            alt="Imagem de um Notebook com o site da Pride Points"
          />
        </div>

        <div className="celular">
          <img
            src={ImgCelular}
            alt="Imagem de um celular com o app da Pride Points"
          />
        </div>
      </div>

      <div className="content-middle">
        <h2>A diversidade no seu alcance!</h2>
        <p>
          Em breve, nossa plataforma estará ao alcance dos seus dedos!
          Prepare-se para experimentar a versão mobile da nossa aplicação,
          tornando mais fácil do que nunca conectar-se, explorar e compartilhar
          experiências autênticas e inclusivas com a comunidade LGBTQIA+. Fique
          atento para desfrutar de mobilidade total!
        </p>
      </div>

      <div className="content-bottom">
        <div className="left">
          <img
            src={Logo}
            alt="Logo da Pride Points"
            title="Logo da Pride Points"
          />
        </div>

        <div className="center">
          <nav>
            <ul>
              <li>Sobre o projeto</li>
              <li>Para você</li>
              <li>Para seu negócio</li>
            </ul>
          </nav>
        </div>

        <div className="right">
          <a href="#">
            <img src={IconFacebook} alt="" />
          </a>

          <a href="#">
            <img src={IconTwitter} alt="" />
          </a>

          <a href="#">
            <img src={IconInstagram} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
