import "./home.css";

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="cardText">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
