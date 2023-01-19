const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const routes = require('./routes');

const swaggerFile = require('../swagger-output.json');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => console.log('ouvindo porta', 3000));
