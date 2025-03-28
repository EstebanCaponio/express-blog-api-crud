const express = require('express');
const app = express();
const port = 2000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('sei nella home');
})

app.listen(port, () => {
    console.log(`hei, Example app listening on port ${port}`)
})