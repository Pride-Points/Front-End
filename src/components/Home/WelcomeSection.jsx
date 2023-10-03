import "./home.css";
import IconSobre from "../../assets/icon-sobre.svg";

function WelcomeSection() {
  return (
    <section className="welcomeSection">
      <h2>Bem vindo!</h2>
      <p>
        Nós da Pride Points, acreditamos que cada pessoa tem o direito de viver
        autenticamente, expressando sua verdadeira identidade, sem medo de
        julgamento ou exclusão. Nosso objetivo é criar um espaço onde a
        comunidade LGBTQIA+ e os estabelecimentos comerciais se conectem,
        compartilhem experiências e impulsionem a mudança positiva.
      </p>

      <div className="points">
        <img src={IconSobre} alt="" />

        <div className="spanTexts">
          <span>
            Se esta em busca de locais seguros ou tornar seu ambiente mais
            inclusivo cadastre-se e faça login
          </span>

          <span>
            Se esta em busca de locais seguros ou tornar seu ambiente mais
            inclusivo cadastre-se e faça login
          </span>

          <span>
            Se esta em busca de locais seguros ou tornar seu ambiente mais
            inclusivo cadastre-se e faça login
          </span>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
