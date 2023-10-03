import "./home.css";

function UserSectionDefault({
  title,
  description,
  textButton,
  imgSrc,
  imgPosition,
}) {
  return imgPosition === "right" ? (
    <div className="userSectionDefault">
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{textButton}</button>
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
        <button>{textButton}</button>
      </div>
    </div>
  );
}

export default UserSectionDefault;
