const express = require('express');
const app = express();
const port = 2002;
const postsRouter = require('./routers/posts');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('sei nella home');
})

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`hei, Example app listening on port ${port}`)
});