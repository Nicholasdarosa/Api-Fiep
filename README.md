Projeto: API RESTful com Node.js e Frontend em React

Descrição Geral

Este projeto consiste em uma API RESTful desenvolvida com Node.js e um frontend em React para cadastro, consulta, edição e remoção de produtos.
A aplicação segue boas práticas de desenvolvimento, garantindo segurança, escalabilidade e modularização.

Tecnologias Utilizadas

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT (JSON Web Token) para autenticação

Winston para logging

Docker e Docker Compose

Frontend

React.js

React Router

Axios para requisições HTTP

Context API para gerenciamento de estado

Tailwind CSS para estilização

Backend

Estrutura do Projeto

backend/
├── src/
│   ├── config/
│   │   ├── database.js  # Configuração do MongoDB
│   │   ├── logger.js    # Configuração do logging
│   ├── controllers/
│   │   ├── authController.js  # Lógica de autenticação
│   │   ├── productController.js  # CRUD de produtos
│   ├── models/
│   │   ├── Product.js  # Modelo do produto (Mongoose)
│   │   ├── User.js     # Modelo do usuário
│   ├── middleware/
│   │   ├── authMiddleware.js  # Middleware de autenticação JWT
│   ├── routes/
│   │   ├── authRoutes.js  # Rotas de autenticação
│   │   ├── productRoutes.js  # Rotas do CRUD de produtos
│   ├── app.js  # Configuração principal do Express
│   ├── server.js  # Inicialização do servidor
├── .env  # Variáveis de ambiente
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md

Endpoints da API

Autenticação

POST /api/auth/register - Cadastro de usuário

POST /api/auth/login - Login e geração de JWT

Produtos

POST /api/products - Criar produto (Requer autenticação)

GET /api/products - Listar todos os produtos

GET /api/products/:id - Buscar produto por ID

PUT /api/products/:id - Atualizar produto (Requer autenticação)

DELETE /api/products/:id - Remover produto (Requer autenticação)

Como Rodar o Backend

# Clonar repositório
$ git clone https://github.com/Nicholasdarosa/Api-Fiep
$ cd backend

# Criar e configurar .env
$ cp .env.example .env

# Instalar dependências
$ npm install

# Rodar a API em desenvolvimento
$ npm run dev

# Rodar via Docker
$ docker-compose up --build

Frontend

Estrutura do Projeto

frontend/
├── src/
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Páginas principais (Login, Produtos, etc.)
│   ├── services/     # Chamadas para API
│   ├── context/      # Context API para gerenciamento de estado
│   ├── App.js        # Configuração do React Router
│   ├── index.js      # Ponto de entrada
├── .env
├── package.json
├── README.md

Como Rodar o Frontend

# Clonar repositório
$ git clone https://github.com/Nicholasdarosa/Api-Fiep
$ cd frontend

# Criar e configurar .env
$ cp .env.example .env

# Instalar dependências
$ npm install

# Rodar o frontend
$ npm start

Testando a API com Postman

Uma Postman Collection foi criada para testar os endpoints da API. Basta importar o arquivo postman_collection.json no Postman e executar os testes.

Docker

A aplicação está conteinerizada para facilitar a execução:

$ docker-compose up --build

Isso irá iniciar tanto o backend quanto o frontend juntos.

Contato

Caso tenha dúvidas, entre em contato via email: nicholas.darosa@hotmail.com

