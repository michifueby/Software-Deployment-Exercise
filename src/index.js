const express = require('express');
const app = express();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const port = process.env.PORT || 3000;

const swaggerDoc = YAML.load('./swagger.yaml');
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (req, res) => {
    console.log("SmartHome App");
});

app.listen(port, () => {
    console.log(`Server running under http://localhost:${port}`);
});