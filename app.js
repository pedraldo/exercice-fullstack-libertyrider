const express = require('express');
const app = express();
const $ = require('jquery');

// Initialize Firebase
// const firebase = require('firebase');
// var config = {
//     apiKey: "AIzaSyCh-YZVdlpTpe-wkuNN9r1CBY0UgoP9WUo",
//     authDomain: "libertyridertest.firebaseapp.com",
//     databaseURL: "https://libertyridertest.firebaseio.com",
//     projectId: "libertyridertest",
//     storageBucket: "libertyridertest.appspot.com",
//     messagingSenderId: "1091199565732"
// };
// firebase.initializeApp(config);

const PORT = 3000;
const HOST = '0.0.0.0';

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));

app.get('/', (request, response) => {
    response.render('index');
});

// app.post('/', (request, response) => {
//     debugger;
//     if (!request.body) {
//         console.log('render 500 post form');
//         response.sendState(500);
//     } else {
//         console.log('render 200 post form');
//         response.sendState(200);
//     }
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);