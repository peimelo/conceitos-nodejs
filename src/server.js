const app = require('./app');

const port = process.env.NODE_ENV === 'production' ? 80 : 3333;

app.listen(port);
