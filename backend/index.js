const express = require('express');
const cors = require('cors');



const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(5000, () => {
    console.log('Example app listening on port 3000!');
    });