<h1>Hamburgueria App  🍔🍟</h1>
<h2>Este é um projeto de uma aplicação para cadastro de pedidos de uma hamburgueria, utilizando Node.js e Express.</h2>
<br>
<h3>Funcionalidades</h3>
- Cadastro de pedidos com as informações do cliente, o pedido, o valor e o status.
  <br>
- Listagem de todos os pedidos já feitos.
  <br>
- Alteração de um pedido existente.
  <br>
- Exclusão de um pedido existente.
  <br>
- Consulta de informações de um pedido específico.
  <br>
- Alteração do status de um pedido para "Pronto".
  <br>
<h2>Instalação</h2>
  
- Certifique-se de ter o Node.js instalado em seu computador.
<br>
- Faça o download ou clone este repositório.
<br>
- Na raiz do projeto, execute o comando npm install para instalar as dependências.
<br>


<h2> Uso </h2>
- Para iniciar o servidor, execute o comando npm start.
<br>
- O servidor estará disponível em http://localhost:3000.
<br>
<h2>>Rotas</h2>
- POST /order: Cria um novo pedido com as informações do cliente, pedido, valor e status "Em preparação".
<br>
- GET /order: Lista todos os pedidos já feitos.
<br>
- PUT /order/:id: Altera um pedido existente com base no ID fornecido.
<br>
- DELETE /order/:id: Exclui um pedido existente com base no ID fornecido.
<br>
- PATCH /order/:id: Altera o status de um pedido para "Pronto" com base no ID fornecido.
<br>
<h2>Middlewares</h2>
- check: Middleware utilizado em todas as rotas que recebem o parâmetro ID. Verifica se o ID passado existe. Caso não exista, retorna um erro. Caso contrário, permite a requisição continuar normalmente.
<br>
- requestCheck: Middleware chamado em todas as requisições para exibir no console o método da requisição (GET, POST, PUT, DELETE, etc) e a URL da requisição.
<br>
<h2>Observações</h2>
Este é um projeto de exemplo com o objetivo de demonstrar o uso de Node.js e Express para criar uma API básica de cadastro de pedidos de uma hamburgueria. Em um ambiente de produção, é recomendado utilizar um banco de dados para armazenar os pedidos de forma persistente.



<h2>Tecnologias usadas:</h2>

- <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express-logo">
<br>

- <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Nodejs-logo">
