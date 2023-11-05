import React, { useState } from 'react';
import './forms.css'; 

function Forms() {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui podemos adicionar a lógica para lidar com o envio do formulário
    // Por exemplo, validar as senhas e realizar alguma ação quando o botão "Confirmar" for clicado
  };

  return (
    <div className="formulario-senha">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="senhaAtual">Senha Atual</label>
          <input
            type="password"
            id="senhaAtual"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="novaSenha">Nova Senha</label>
          <input
            type="password"
            id="novaSenha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}

export default Forms;