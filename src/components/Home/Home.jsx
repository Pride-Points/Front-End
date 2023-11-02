import "./home.css";
import MainSection from "./MainSection";
import WelcomeSection from "./WelcomeSection";
import UserSectionDefault from "./UserSectionDefault";
import ImgUser from "../../assets/img-user.png";
import ImgBusiness from "../../assets/img-business.png";
import CardSectionDefault from "./CardSectionDefault";
import Card from "./Card";
import { Element } from 'react-scroll';


function Home() {
  return (
    <main>
      <MainSection />
      <Element name="WelcomeSection">
        <WelcomeSection />
      </Element>
      <Element name="ParaVoce">
        <UserSectionDefault
          title="Para você!"
          description="Descubra, Avalie, Celebre! Explore estabelecimentos diversificados com total aceitação na nossa plataforma 
      e ganhe beneficíos exclusivos. Sua jornada de experiências autênticas começa aqui."
          textButton="Encontre"
          imgSrc={ImgUser}
          imgPosition="right"
        />
      </Element>

      <CardSectionDefault text={"Porquê sua opinião importa?"}>
        <Card
          title={"Direcionamento Informado"}
          description={
            "As opiniões de avaliadores LGBTQIA+ guiam escolhas informadas ao destacar aspectos como atendimento, políticas inclusivas e atmosfera, influenciando a comunidade a decidir onde frequentar."
          }
        />
        <Card
          title={"Visibilidade LGBTQIA+"}
          description={
            "As avaliações  da comunidade destacam estabelecimentos inclusivos, realçando sua aceitação genuína e direcionando a atenção a ambientes que celebram a diversidade."
          }
        />
        <Card
          title={"Estímulo à Mudança Positiva"}
          description={
            "Através das avaliações, avaliadores LGBTQIA+ impulsionam melhorias nos estabelecimentos, promovendo inclusão e aceitação por meio de ajustes em políticas, treinamento e ambiente."
          }
        />
      </CardSectionDefault>
      <Element name="ParaSeuNegocio">
        <UserSectionDefault
          title="Para seu estabelecimento!"
          description="Junte-se a nós para alcançar um público diverso e mostrar seu compromisso com a inclusão. Receba feedback valioso diretamente da comunidade LGBTQIA+ para aprimorar sua experiência"
          textButton="Cadastre-se"
          imgSrc={ImgBusiness}
          imgPosition="left"
        />
      </Element>


      <CardSectionDefault text={"Benefícios para seu negócio"}>
        <Card
          title={"Receba Feedback Direto e Valioso"}
          description={
            "Desbloqueie um conjunto exclusivo de ferramentas de dashboard para conectar-se autenticamente com a comunidade LGBTQIA+ e transformar seu negócio em um espaço inclusivo e acolhedor."
          }
        />
        <Card
          title={"Amplie Seu Alcance para uma Audiência Inclusiva"}
          description={
            "Aproveite avaliações autênticas da comunidade LGBTQIA+ para obter insights valiosos que aprimorarão seus serviços e aumentarão a satisfação e fidelidade dos clientes."
          }
        />
        <Card
          title={"Ferramentas exclusivas"}
          description={
            "Junte-se a nós para alcançar uma audiência diversa e engajada da comunidade LGBTQIA+, elevando a visibilidade do seu estabelecimento e criando um ambiente inclusivo"
          }
        />
      </CardSectionDefault >
    </main>
  );
}

export default Home;
