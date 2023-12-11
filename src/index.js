const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log("SmartHome App");
});

app.listen(port, () => {
    console.log(`Server running under http://localhost:${port}`);
});