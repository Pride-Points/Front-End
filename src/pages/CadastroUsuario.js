import React, { useState } from "react";
import Cadastro from "../components/Cadastros/Cadastro";
import api from "../api/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CadastroUsuario() {
  const [mostrarSegundaParteCad, setMostrarSegundaParteCad] = useState(false);
  const [dadosPrimeiraParte, setDadosPrimeiraParte] = useState(null);

  const navigate = useNavigate();

  // Função para validar CPF
  function validarCPF(cpf) {
    // Remover caracteres não numéricos
    const cpfNumerico = cpf.replace(/\D/g, "");

    // Verificar se o CPF tem 11 dígitos
    if (cpfNumerico.length !== 11) {
      return false;
    }

    // Verificar se todos os dígitos são iguais (ex: 000.000.000-00)
    if (/^(\d)\1+$/.test(cpfNumerico)) {
      return false;
    }

    // Algoritmo de validação do CPF
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpfNumerico.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpfNumerico.substring(9, 10))) {
      return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpfNumerico.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpfNumerico.substring(10, 11))) {
      return false;
    }

    return true;
  }

  const cadastrarDois = (e) => {
    e.preventDefault();

    // Dados da segunda parte
    const dadosSegundaParteLocal = {
      email: e.target.email ? e.target.email.value : "",
      cpf: e.target.cpf ? e.target.cpf.value : "",
      senha: e.target.senha ? e.target.senha.value : "",
      confirmacaoSenha: e.target.confirmacao_de_senha
        ? e.target.confirmacao_de_senha.value
        : "",
    };

    // Validar se todos os campos estão preenchidos
    const camposPreenchidos = Object.values(dadosSegundaParteLocal).every(
      (value) => value.trim() !== ""
    );

    if (!camposPreenchidos) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    // Validar o CPF
    if (!validarCPF(dadosSegundaParteLocal.cpf)) {
      toast.error("CPF inválido");
      return;
    }

    // Validar a senha
    const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      dadosSegundaParteLocal.senha
    );

    // Validar se a senha e a confirmação de senha são iguais
    if (!senhaValida) {
      toast.error(
        "A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula, um número e ter no mínimo 8 caracteres."
      );
      return;
    }

    if (
      dadosSegundaParteLocal.senha !== dadosSegundaParteLocal.confirmacaoSenha
    ) {
      toast.error("A senha e a confirmação de senha devem ser iguais.");
      return;
    }

    // Unir os dados das duas partes
    const cadastroCompleto = {
      nome: dadosPrimeiraParte.nome,
      senha: dadosSegundaParteLocal.senha,
      email: dadosSegundaParteLocal.email,
      orientacaoSexual: dadosPrimeiraParte.orientacaoSexual,
      genero: dadosPrimeiraParte.genero,
      cpf: dadosSegundaParteLocal.cpf,
      dtNascimento: dadosPrimeiraParte.dataDeNascimento,
    };

    api
      .post("/users", cadastroCompleto)
      .then((res) => {
        // Cadastro bem-sucedido
        Swal.fire({
          title: "Cadastro bem-sucedido!",
          text: "Deseja fazer login agora?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Sim",
          cancelButtonText: "Não",
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirecionar para a página de login ou executar a lógica de login
            navigate("/login");
          } else {
            // Lógica a ser executada se o usuário escolher "Não"
            navigate("/");
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
      nome: e.target.nome ? e.target.nome.value : "",
      genero: e.target.genero ? e.target.genero.value : "",
      orientacaoSexual: e.target.orientacao_sexual
        ? e.target.orientacao_sexual.value
        : "",
      dataDeNascimento: e.target.data_de_nascimento
        ? e.target.data_de_nascimento.value
        : "",
    };

    // Verificar se todos os campos estão preenchidos
    if (Object.values(dadosPrimeiraParte).some((value) => value === "")) {
      toast.error("Todos os campos do cadastro devem ser preenchidos.");
      return;
    }

    // Validar o formato do nome (apenas caracteres alfabéticos e espaços)
    if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(dadosPrimeiraParte.nome)) {
      toast.error("Por favor, insira um nome válido.");
      return;
    }
    // Armazenar os dados
    setDadosPrimeiraParte(dadosPrimeiraParte);

    // Mostrar a segunda parte
    handleContinuarClick();
  };

  const handleContinuarClick = () => {
    setMostrarSegundaParteCad(true);
  };

  return (
    <Cadastro
      MTbarraUm={"92.77px"}
      MBbarraUm={"80px"}
      inputTitlesUm={[
        "Nome",
        "Gênero",
        "Orientação Sexual",
        "Data de Nascimento",
      ]}
      tituloUm="Seja Membro!"
      subtituloUm="Faça parte do projeto e aproveite benefícios exclusivos."
      tituloBotaoUm="Continuar"
      MTbarraDois={"60.77px"}
      MBbarraDois={"80px"}
      inputTitlesDois={["Email", "Cpf", "Senha", "Confirmação de senha"]}
      tituloDois="Seja Membro"
      tituloBotaoDois="Confirmar"
      subtituloDois="Faça parte do projeto e aproveite benefícios exclusivos."
      mostrarSegundaParteCad={mostrarSegundaParteCad}
      cadastrarDois={cadastrarDois}
      cadastrarUm={cadastrarUm}
    />
  );
}

export default CadastroUsuario;
