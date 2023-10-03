import "./home.css";

function CardSectionDefault({text, children}) {
  return (
    <div className="cardSectionDefault">
      <div className="text">
        <h2>{text}</h2>
        <div className="cardContainer">
        {children}
        </div>
      </div>
    </div>
  );
}

export default CardSectionDefault;
