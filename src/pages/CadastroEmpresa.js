import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cadastro from "../components/Cadastros/Cadastro";
import api from '../api/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function CadastroEmpresa() {
  const [mostrarSegundaParteCad, setMostrarSegundaParteCad] = useState(false);
  const [dadosPrimeiraParte, setDadosPrimeiraParte] = useState(null);

  const navigate = useNavigate();

  const cadastrarDois = (e) => {
    e.preventDefault();
  
    // Dados da segunda parte
    const dadosSegundaParteLocal = {
      cidade: e.target.cidade ? e.target.cidade.value : '',
      numero: e.target.numero ? e.target.numero.value : '',
      email: e.target.email ? e.target.email.value : '',
      senha: e.target.senha ? e.target.senha.value : '',
      confirmacaoDeSenha: e.target.confirmacao_de_senha ? e.target.confirmacao_de_senha.value : '',
    };
  
    // Validar se todos os campos estão preenchidos
    const camposPreenchidos = Object.values(dadosSegundaParteLocal).every(value => value.trim() !== '');
  
    if (!camposPreenchidos) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
  
    // Validar a senha
    const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(dadosSegundaParteLocal.senha);
  
    // Validar se a senha e a confirmação de senha são iguais
    if (!senhaValida) {
      toast.error("A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula, um número e ter no mínimo 8 caracteres.");
      return;
    }
  
    if (dadosSegundaParteLocal.senha !== dadosSegundaParteLocal.confirmacaoDeSenha) {
      toast.error("A senha e a confirmação de senha devem ser iguais.");
      return;
    }
  
    // Unir os dados das duas partes
    const cadastroCompleto = {
      ...dadosPrimeiraParte,
      ...dadosSegundaParteLocal,
    };
  
    console.log(cadastroCompleto);
  
    api.post("/", cadastroCompleto)
      .then((res) => {
        // Cadastro bem-sucedido
        Swal.fire({
          title: 'Cadastro bem-sucedido!',
          text: 'Deseja fazer login agora?',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não',
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirecionar para a página de login ou executar a lógica de login
            navigate('/');
          } else {
            // Lógica a ser executada se o usuário escolher "Não"
            navigate('/');
          }
        });
      })
      .catch((erro) => {
        // Erro no cadastro
        toast.error("Erro ao cadastrar!");
      });
  };


  const cadastrarUm = (e) => {
    e.preventDefault();

    // Dados da primeira parte
    const dadosPrimeiraParte = {
      nomeFantasia: e.target.nome_fantasia ? e.target.nome_fantasia.value.trim() : '',
      nomeResponsavel: e.target.nome_responsavel ? e.target.nome_responsavel.value.trim() : '',
      cargo: e.target.cargo ? e.target.cargo.value.trim() : '',
      cnpj: e.target.cnpj ? e.target.cnpj.value.trim() : '',
      cep: e.target.cep ? e.target.cep.value.trim() : '',
      estado: e.target.estado ? e.target.estado.value.trim() : '',
    };

    // Verificar se todos os campos estão preenchidos
    if (Object.values(dadosPrimeiraParte).some(value => value === '')) {
      toast.error("Todos os campos do cadastro devem ser preenchidos.");
      return;
    }

    console.log(dadosPrimeiraParte);

    // Armazenar os dados
    setDadosPrimeiraParte(dadosPrimeiraParte);

    // Mostrar a segunda parte
    handleContinuarClick();
  };

  const handleContinuarClick = () => {
    setMostrarSegundaParteCad(true);
  };

  return (
    <>
      <Cadastro
        MTbarraUm={"38px"}
        MBbarraUm={"65px"}
        inputTitlesUm={['Nome Fantasia', 'Nome Responsável', 'Cargo',
          'CNPJ', 'CEP', 'Estado']}
        tituloUm="Faça Parte!"
        subtituloUm="Cadastre-se e conheça os benefícios para o seu negócio"
        tituloBotaoUm="Continuar"
        MTbarraDois={"38px"}
        MBbarraDois={"65px"}
        inputTitlesDois={['Cidade', 'Numero', 'E-mail', 'Senha', 'Confirmação de Senha']}
        tituloDois="Faça Parte!"
        subtituloDois="Cadastre-se e conheça os benefícios para o seu negócio"
        tituloBotaoDois="Confirmar"
        mostrarSegundaParteCad={mostrarSegundaParteCad}
        cadastrarDois={cadastrarDois}
        cadastrarUm={cadastrarUm}
      />
    </>
  );
}

export default CadastroEmpresa;
