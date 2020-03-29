const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Para apenas "http://meuapp.com" poder ter acesso a API back-end
// app.use(conrs({
//   origin: 'http://meuapp.com'
//}));
app.use(cors()); // Todos front-end conseguem acessar a API back-end
app.use(express.json());
app.use(routes);

app.listen(3333);
console.log("Server run...");

