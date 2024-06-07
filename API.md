# API Documentation

Esta documentação descreve os endpoints da API utilizados na classe `ApiService`.
Cada seção contém o método HTTP, a URL, os parâmetros esperados, e exemplos de requisição e resposta.

## Endpoints

### 1. Login de Usuário

**Método:** `GET`

**URL:** `http://localhost:8080/user/login?email={email}&senha={senha}`

**Parâmetros:**
- `email` (string): Email do usuário.
- `senha` (string): Senha do usuário.

**Exemplo de Requisição:**
```bash
fetch('http://localhost:8080/user/1](http://localhost:8080/user/login?email=usuario@example.com&senha=senha123')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
// Exemplo de Resposta
const responseExample = {
  "token": "jwt-token-aqui",
  "user": {
    "id": 1,
    "name": "Usuário",
    "email": "usuario@example.com"
  }
};

```
### 2. Registro de Usuário

**Método:** POST
**URL:** `http://localhost:8080/user`
// Parâmetros:
//   - email_user (string): Email do usuário.
//   - senha_user (string): Senha do usuário.
//   - nome (string): Nome do usuário.
// Exemplo de Requisição:
fetch('http://localhost:8080/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email_user: 'novo.usuario@example.com',
    senha_user: 'novaSenhaSecreta',
    nome: 'Novo Usuário'
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Exemplo de Resposta:
const responseExample = {
  "id": 2,
  "email": "novo.usuario@example.com",
  "name": "Novo Usuário"
};

// 3. Mostrar Lista de Coleta

// Método: GET
// URL: http://localhost:8080/coleta
// Exemplo de Requisição:
fetch('http://localhost:8080/coleta')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Exemplo de Resposta:
const responseExample = [
  {
    "id": 1,
    "data": "2024-06-07T00:00:00Z",
    "local": "Local A"
  },
  {
    "id": 2,
    "data": "2024-06-08T00:00:00Z",
    "local": "Local B"
  }
];

// 4. Registrar Resíduo

// Método: POST
// URL: http://localhost:8080/residuos
// Parâmetros:
//   - tipo (string): Tipo do resíduo.
//   - quantidade (number): Quantidade do resíduo.
//   - data (string): Data do registro.
// Exemplo de Requisição:
fetch('http://localhost:8080/residuos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    tipo: 'Plástico',
    quantidade: 5,
    data: '2024-06-07T00:00:00Z'
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Exemplo de Resposta:
const responseExample = {
  "id": 1,
  "tipo": "Plástico",
  "quantidade": 5,
  "data": "2024-06-07T00:00:00Z"
};

