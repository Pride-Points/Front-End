import Cadastro from "../components/Cadastros/Cadastro";

function CadastroUsuario() {
    return (
        <Cadastro
            MTbarraUm={"92.77px"}
            MBbarraUm={"80px"}
            inputTitlesUm={['Nome', 'Gênero', 'Orientação Sexual']}
            tituloUm="Seja Membro!"
            subtituloUm="Faça parte do projeto e aproveite benefícios exclusivos."
            tituloBotaoUm="Continuar"

            MTbarraDois={"60.77px"}
            MBbarraDois={"80px"}
            inputTitlesDois={['Email', 'Cpf', 'Senha', 'Confirmação de senha']}
            tituloDois="Seja Membro"
            tituloBotaoDois="Confirmar"
            subtituloDois="Faça parte do projeto e aproveite benefícios exclusivos."
        />
    )
}
  

export default CadastroUsuario;