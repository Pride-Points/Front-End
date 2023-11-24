
function CardUsuario(props){
  return(
    <div className="cardUsuario">
      <div className="cardImage">
        <img src={props.img} alt="imagem" />
      </div>

      <div className="cardText">
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </div>

      <div className="cardInfo">
        <span className="info">{props.info}</span>
        <span className="data">{props.data}</span>
      </div>

    </div>
  );
}

export default CardUsuario;