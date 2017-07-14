const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));
app.use('/dist', express.static('dist'));

app.get('/', (request, response) => {
    response.render('index');

});

app.get('/last-commit', (request, response) => {
    response.render('commit');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);