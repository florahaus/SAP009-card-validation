# Banco Central da Banguela - validação de cartão de crédito

ir para pagina: https://florahaus.github.io/SAP009-card-validation/
## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)


***

## 1. Introdução

O Algoritmo de Luhn é um método de validação de números de identificação, como números de cartão de crédito, números de IMEI, etc. Ele funciona verificando se o número gerado é válido, seguindo uma lógica de soma e duplicação de dígitos. É amplamente utilizado em aplicações financeiras para evitar erros de digitação e fraudes. O algoritmo é simples e rápido, tornando-se uma forma eficiente de validação de números.


## 2. Resumo do projeto

Para o meu projeto, implementei o algoritmo de Luhn para verificação de cartões de crédito internacionais em um banco fictício. Desenvolvi uma interface acessível e fácil de usar para os usuários, garantindo a segurança e a rapidez na verificação dos seus cartões. O público-alvo são os clientes do Banco Central da Banguela que estão viajando internacionalmente e precisam ativar a funcionalidade de compras internacionais em seus cartões.

Meu objetivo é proporcionar aos usuários uma experiência de validação de cartão de crédito fácil e segura, sem perda de tempo em longas esperas ou chamadas telefônicas. Ao agilizar este processo, eu ajudo os usuários a ter uma jornada mais suave e autônoma, sem a necessidade de recorrer a profissionais do setor financeiro.

Criei o arquivo index.html que contém as informações gerais, formulário para inserção dos números de cartão e mensagem de retorno após clique no botão "Verificar". No arquivo validator.js, realizei a lógica por trás da validação, definindo a quantidade mínima de caracteres, separando os caracteres, realizando as somas e criando a função maskify para mascarar todo os dígitos menos os últimos quatro dígitos do cartão.

No index.js, criei condicionais para verificar a validade do cartão e exibir uma mensagem de cartão válido ou inválido, juntamente com os números mascarados. Utilizei conceitos básicos de CSS para dar vida à interface, selecionando cores, imagens, fontes e cores de botões para melhorar a experiência do usuário.

Por fim, publiquei o projeto no GitHub Pages para futuras colaborações ou desenvolvimento adicional.

<h2>
Para deployar, instalar e executar a aplicação, siga os seguintes passos:</h2>

1. Clone o repositório do GitHub para seu ambiente local: utilize o comando "git clone" seguido pelo endereço do repositório do GitHub Pages onde o projeto foi publicado.

2. Abra o arquivo index.html em um navegador da web: isso irá mostrar a interface da aplicação.

3. Para instalar as dependências, você precisa ter o npm (gerenciador de pacotes do Node.js) instalado em sua máquina. Abra o terminal na pasta do projeto e execute o comando "npm install".

4. Para executar a aplicação, execute o comando "npm start" no terminal. Isso iniciará o servidor local e a aplicação será acessível em "http://localhost:3000/".

5. Agora você pode testar a validação de cartões de crédito acessando a interface pelo navegador. Insira um número de cartão de crédito e clique no botão "Verificar". Uma mensagem indicando se o cartão é válido ou inválido será exibida na tela, juntamente com os números mascarados.

