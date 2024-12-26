const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static(path.resolve(__dirname, '../front-end')))

app.get('/', (req, res) => {
   res.setHeader('content-type', 'text/html');
   res.sendfile(path.resolve(__dirname, '../front-end/index.html'))
});

app.listen(port, () => {
    console.log('service is running');
});