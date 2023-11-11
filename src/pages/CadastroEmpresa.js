import Cadastro from "../components/Cadastros/Cadastro";

function CadastroEmpresa(){
    return (
        <Cadastro 
        quantityUm={6}
        MTbarraUm={"38px"}
        MBbarraUm={"65px"}
        inputTitlesUm={['Nome Fantasia', 'Nome Responsável', 'Cargo',
         'CNPJ', 'CEP', 'Estado']}
         tituloUm="Faça Parte!"
         subtituloUm="Cadastre-se e conheça os beneficios para o seu negócio"
         tituloBotaoUm="Continuar"
         
         quantityDois={5}
         MTbarraDois={"38px"}
         MBbarraDois={"65px"}
         inputTitlesDois={['Cidade','Numero','E-mail','Senha','Confirmação de Senha']}
         tituloDois="Faça Parte!"
         subtituloDois="Cadastre-se e conheça os beneficios para o seu negócio"
         tituloBotaoDois="Confirmar"/>
    )
}

export default CadastroEmpresa;