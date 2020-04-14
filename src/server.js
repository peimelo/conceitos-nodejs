const app = require('./app');

const port = process.env.NODE_ENV === 'production' ? 8080 : 3333;

app.listen(port, () => console.log('Express server listening on port', port));
