# 🍔 DevBurger API

API RESTful desenvolvida para gerenciar pedidos e usuários de uma hamburgueria fictícia, como parte do projeto **DevBurger**. O projeto foi construído com Node.js e Express, utilizando banco de dados PostgreSQL com Sequelize ORM.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript
- **Express** — Framework web para Node.js
- **PostgreSQL** — Banco de dados relacional
- **Sequelize** — ORM para PostgreSQL
- **JWT (jsonwebtoken)** — Autenticação com tokens
- **Multer** — Upload de arquivos (ex: imagens dos produtos)
- **Dotenv** — Variáveis de ambiente
- **Yup** — Validação de dados
- **UUID** — Geração de IDs únicos
- **Cors** — Habilitação de CORS
- **Bcrypt** — Criptografia de senhas
- **Stripe** — Integração para pagamentos (opcional)
- **Pg-hstore** — Conversor de objetos JSON para PostgreSQL
- **Mongoose** — Para integração futura com MongoDB (se necessário)

---

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── controllers/     # Lógica de negócio (Users, Orders, etc.)
│   ├── middlewares/     # Autenticação, tratamento de erros, etc.
│   ├── schemas/         # Validação com Yup
├── config/              # Configurações do Sequelize, Stripe etc.
├── database/            # Migrations, Seeds, Models
├── uploads/             # Armazenamento de imagens
├── routes.js            # Rotas principais
├── server.js            # Inicialização do servidor
├── app.js               # Configuração geral da aplicação
```

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/MaximillionDev1/codeburger-API.git

# Entre no diretório
cd codeburger-API

# Instale as dependências
yarn install
```

---

## ⚙️ Rodando o Projeto

```bash
# Para iniciar o servidor em modo desenvolvimento
yarn dev
```

Certifique-se de criar um arquivo `.env` com suas variáveis de ambiente, como:

```
DATABASE_URL=postgres://usuario:senha@localhost:5432/devburger
JWT_SECRET=sua_chave_secreta
```

---

## 🔐 Autenticação

- A autenticação é baseada em **JWT (JSON Web Token)**
- As rotas protegidas exigem envio do token no `Authorization Header`

---

## 🧪 Testes (em desenvolvimento)

Em breve, testes automatizados com **Jest** e **Supertest**.

---

## 👨‍💻 Autor

**Matheus Vinicius**  
Desenvolvedor em transição de carreira, apaixonado por tecnologia e aprendizado constante.

- GitHub: [@MaximillionDev1](https://github.com/MaximillionDev1)

---

## 📝 Licença

Este projeto está sob a licença ISC. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
