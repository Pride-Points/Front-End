import "./card.css";
import iconClose from "../../assets/icon-close.png";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="modal-cadastro">
      <div className="close">
        <img
          src={iconClose}
          onClick={() => {
            props.isOpen();
          }}
          width="30px"
          height="30px"
        ></img>
      </div>
      <h1>{props.titulo}</h1>
      <div className="container-cards">
        <Link to={props.linkUm} className="link-style">
          <div className="card-modal">
            <h2>{props.tituloFirstCard}</h2>
            <img src={props.imgFirstCard} width="150px" height="150px" />
          </div>
        </Link>
        <Link to={props.linkDois} className="link-style">
          <div className="card-modal border-color">
            <h2>{props.tituloSecondCard}</h2>
            <img src={props.imgSecondCard} width="150px" height="150px" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
