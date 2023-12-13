const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDefinition = YAML.load('./swagger.yaml');
const port = process.env.PORT || 3000;


app.use(express.static('assets'));

const options = {
    swaggerDefinition,
    apis: [__filename], 
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /:
 *   get:
 *     summary: Smart Home Dashbaord
 *     responses:
 *       200:
 *         description: Successful response
 */
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}\\assets\\index.html`);
});

/**
 * @openapi
 * /security:
 *   get:
 *     summary: Get smart home security information
 *     responses:
 *       200:
 *         description: Successful response
 */
app.get('/security', (req, res) => {
    res.sendFile(`${__dirname}\\assets\\smart-home-info\\smart-home-security.json`)
});

/**
 * @openapi
 * /temperature:
 *   get:
 *     summary: Get smart home temperature information
 *     responses:
 *       200:
 *         description: Successful response
 */
app.get('/temperature', (req, res) => {
    res.sendFile(`${__dirname}\\assets\\smart-home-info\\smart-home-temperature.json`)
});

app.listen(port, () => {
    console.log(`Server running under http://localhost:${port}`);
});