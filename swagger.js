const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/server.js'];
const pathRoot = require('./src/server');

swaggerAutogen(outputFile, endpointsFiles).then(() => pathRoot);