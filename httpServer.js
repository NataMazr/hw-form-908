const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');

// app.get('/', (req, res, next) => {
//     res.send('<h1>Hello</h1>');
// })
app.set('view engine', 'pug');
app.use('/index', indexRouter); //

app.listen('3000', () => {
    console.log('listening port 3000')
})