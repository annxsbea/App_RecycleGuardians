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
  "user": {
    "id_user": 1,
    "nome_user": "Usuário",
    "email_user": "usuario@example.com"
   "pontos_user": 2999
   "senha_user": " An2134"
  }
};

```
### 2. Registro de Usuário

**Método:** `POST`
**URL:** `http://localhost:8080/user`
**Parâmetros:**
- `email` (string): Email do usuário.
- `senha` (string): Senha do usuário.
- `nome` (string): Nome do usuário.
**Exemplo de Requisição:**

```bash
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
  "email_user": "novo.usuario@example.com",
  "nome_user": "Novo Usuário"
  "senha_user": "ahzahx"
};
```
### 3. Mostrar Lista de Coleta

**Método:** `GET`
**URL:**  http://localhost:8080/coleta
**Exemplo de Requisição:**

```bash
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

    "id_coleta": 10;
    "cep_coleta": "03344035";
    "endereco_coleta": "Av. Paulista";
    "hr_abertura_coleta": "10:15";
    "hr_fechamento_coleta": "18:15";
    "image": ImageBase64;
  },
  
];
```
 ### 4. Registrar Resíduo

**Método:** `POST`
**URL:**  http://localhost:8080/residuos
**Parâmetros:**
- `tipo` (string): Tipo do resíduo.
- `quantidade`(number): Quantidade do resíduo.
- `data`(string): Data do registro.
**Exemplo de Requisição:**

```bash
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
  "tipo_residuo": "Plástico";
  "nive_risco": "alto";
  "id_residuo": 2;
  "validador": true;
  "quantidade_residuo": 3;
};

```