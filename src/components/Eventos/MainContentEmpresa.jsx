import "./mainContent.css";
import SearchContentEmpresa from "./SearchContentEmpresa.jsx";


function MainContentEmpresa(props) {
  return (
    <div className="mainContentEmpresa">
      <div className="titulo">
        <h1>{props.tituloPgn}</h1>
        <h2>{props.subtituloPgn}</h2>
      </div>

     <SearchContentEmpresa eventos={props.eventos} reviews={props.reviews} isClickable={props.isClickable}/>
     


    </div>
  );
}

export default MainContentEmpresa;
