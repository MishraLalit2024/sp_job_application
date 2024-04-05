const express = require('express');
const app = express();
const port = 3600;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});