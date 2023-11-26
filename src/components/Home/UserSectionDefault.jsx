import "./home.css";
import { useNavigate } from 'react-router-dom'; 

function UserSectionDefault({
  title,
  description,
  textButton,
  imgSrc,
  imgPosition,
  onButtonClick
}) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Verifica se o título é "Para você!" ou "Para seu estabelecimento!"
    if (title === "Para você!") {
      onButtonClick(true);
    } else if (title === "Para seu estabelecimento!") {
      // Redireciona para a página de cadastro da empresa
      navigate('/cadastro-empresa');
    }
  };

  return imgPosition === "right" ? (
    <div className="userSectionDefault">
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleButtonClick}>{textButton}</button>
      </div>

      <div className="imgHome">
        <img
          src={imgSrc}
          title="Imagem de uma mulher vendo o mapa"
          alt="Imagem de uma mulher vendo o mapa"
        />
      </div>
    </div>
  ) : (
    <div className="userSectionDefault">
      <div className="imgHome">
        <img
          src={imgSrc}
          title="Imagem de uma mulher vendo o mapa"
          alt="Imagem de uma mulher vendo o mapa"
        />
      </div>

      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleButtonClick}>{textButton}</button>
      </div>
    </div>
  );
}

export default UserSectionDefault;
