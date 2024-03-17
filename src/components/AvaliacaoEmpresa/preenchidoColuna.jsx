import React from "react";

const PreenchidoColuna = ({ quantidade, estrela, totalAvaliacoes }) => {
    const porcentagem = totalAvaliacoes ? (quantidade / totalAvaliacoes) * 100 : 0; // Agora calcula a porcentagem baseada no total de avaliações
    return (
        <div className="quantidade-comentarios">
            <div className="stats">
                <p>{`${estrela} estrelas`}</p>
                <h3>{quantidade} ({porcentagem.toFixed(2)}%)</h3> {/* Usando toFixed(2) para limitar a duas casas decimais */}
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