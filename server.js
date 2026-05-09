var express = require('express');
var app = express();
const port = process.env.PORT || 8080;

app.use('/', require('./routes'))

app.listen(8080, () => {
    console.log(`Server is running on port ${port}`);
})