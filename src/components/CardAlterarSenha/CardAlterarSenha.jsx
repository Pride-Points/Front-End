import "./CardAlterarSenha.css";

function CardAlterarSenha(props){
    return (
        <div className="container-senha">
            <h1>Insira o seu Email</h1>
            <p>Enviaremos um e-mail com as instruções!</p>
            <hr />
            <div className="container-input">
                <label >Email</label>
                <input type="email" />
            </div>
            <button>Enviar</button>
            <p className="cancelar" onClick={props.onRequestClose}>cancelar</p>
        </div>
    )
}

export default CardAlterarSenha;