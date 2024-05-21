import "./CadastroEsq.css";

function CadastroEsq(props){
    return (
        <div className="CadastroEsq">
            <img src={props.logo} width={props.widthLogo} height={props.heightLogo}
            className="imgUm"/>
            <img src={props.imgForm} width={props.widthImgForm} height={props.heightImgForm}
            className="imgDois"/>

        </div>
    )
}

export default CadastroEsq;