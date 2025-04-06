# API FIEP - CRUD de Produtos

Este projeto é parte do case **Analista Pleno PDI – RP 16250**, com o objetivo de demonstrar habilidades em desenvolvimento Web Full Stack utilizando Node.js, MongoDB e React.

---

## 🛠️ Tecnologias Utilizadas

### Backend:
- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticação
- Middleware de logger
- Docker + Docker Compose

### Frontend:
- React com Vite
- React Router DOM
- Axios para consumo da API

---

## 📦 Funcionalidades

- [x] Cadastro de produtos
- [x] Listagem de produtos
- [x] Edição de produtos
- [x] Exclusão de produtos
- [x] Interface responsiva
- [x] Autenticação via JWT (no backend)
- [x] Navegação com React Router
- [x] Documentação com README e Postman Collection

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js
- Docker e Docker Compose

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/api-fiep.git
cd api-fiep
```

### 2. Rodar o Backend

```bash
cd Backend
docker-compose up --build
```

A API estará rodando em: `http://localhost:5000/api/produtos`

### 3. Rodar o Frontend

Em outro terminal:

```bash
cd Frontend
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🔐 Autenticação

> A autenticação com JWT está implementada, mas não é exigida no frontend para fins de simplicidade do case.

---

## 📁 Estrutura do Projeto

```
api-fiep/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── .env
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
```

---

## 📮 Postman Collection

Arquivo de coleção incluído na pasta raiz com o nome:
```
postman_collection_api_fiep.json
```


## 👨‍💻 Autor

**Nicholas**  
 Desenvolvedor Fullstack Pleno

---

📝 *Este projeto foi desenvolvido com fins avaliativos, cumprindo todos os requisitos técnicos do case RP 16250.*
