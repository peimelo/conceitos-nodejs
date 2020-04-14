# Repositories Node.js

Repositório para teste com Node.js no backend.

Após clonar o projeto, execute o comando para instalar as dependências:

```
yarn
```

Para rodar o projeto, execute:

```
yarn dev
```

O projeto vai estar disponível no endereço `http://localhost:3333`.

## API

### GET /repositories

USAGE: Get all repositories.

### POST /repositories

USAGE: Add a new repository.

BODY:

```
title - String
url - String
techs - String[]
```

### PUT /repositories/:id

USAGE: Edit the details of an existing repository.

BODY:

```
title - String
url - String
techs - String[]
```

### DELETE /repositories/:id

USAGE: Delete an existing repository.

### POST /repositories/:id/like

USAGE: Increment repository like.
