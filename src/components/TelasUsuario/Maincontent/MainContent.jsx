import "./mainContent.css";
import SearchContent from "./SearchContent.jsx";


function MainContent(props) {
  return (
    <div className="mainContent">
      <div className="titulo">
        <h1>{props.tituloPgn}</h1>
        <p>{props.subtituloPgn}</p>
      </div>

     <SearchContent eventos={props.eventos} reviews={props.reviews} isClickable={props.isClickable}/>
     


    </div>
  );
}

export default MainContent;
