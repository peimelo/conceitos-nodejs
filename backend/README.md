# Backend - Repositories Node.js

Repository to handle the repositories resource backend.

After cloning the project, run the command to install the dependencies:

```
yarn
```

To run the project:

```
yarn dev
```

The project will be available at `http://localhost:3333`.

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
