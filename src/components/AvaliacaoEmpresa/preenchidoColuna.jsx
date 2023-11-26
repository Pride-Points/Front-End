import React from "react";

const PreenchidoColuna = ({ quantidade, estrela }) => {
    const porcentagem = (quantidade / 5) * 100; // Considerando que o valor seja uma avaliação de 0 a 5
    return (

        <div className="quantidade-comentarios">
            <div className="stats">
            <p>{`${estrela} estrelas`}</p>
            <h3>{quantidade} ({porcentagem}%)</h3>
            </div>
            <div className="quantidade">
                <div className="coluna">
                    <div
                        className="preenchido"
                        style={{ width: `${porcentagem}%`, backgroundColor: "#EFA9FF" }}
                    >
                        {quantidade}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default PreenchidoColuna;