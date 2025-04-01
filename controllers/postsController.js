const posts = require('../data/posts');

// function index(req, res) {
//     res.send('Lista delle pizze');
// }
function index(req, res) {
    ciao();
    let filteredPosts = posts;

    if (req.query.tags) {
        filteredPosts = posts.filter(ricetta => ricetta.tags.includes(req.query.tags));
    }

    res.json(filteredPosts);
};

function show(req, res) {

    const id = parseInt(req.params.id);

    const ricetta = posts.find(ricetta => ricetta.id === id);

    if (!ricetta) {
        res.status(404);

        return res.json({
            status: 404,
            console: 'not found',
            message: 'ricetta non trovata'
        })
    }
    res.json(ricetta);
}
function store(req, res) {

    // creazione nuovo id
    const newId = posts[posts.length - 1].id + 1;

    const newRicetta = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newRicetta);
    console.log(posts);

    res.status(201);
    res.json(newRicetta);
}
function update(req, res) {
    const id = parseInt(req.params.id);

    const ricetta = posts.find(ricetta => ricetta.id === id);

    if (!ricetta) {
        res.status(404);

        return res.json({
            status: 404,
            console: 'not found',
            message: 'ricetta non trovata'
        })
    }
    // aggiorno ricetta
    ricetta.title = req.body.title;
    ricetta.content = req.body.content;
    ricetta.image = req.body.image;
    ricetta.tags = req.body.tags;

    console.log(posts);
    res.json(ricetta);
}
function modify(req, res) {
    res.send('Modifica parziale della ricetta ' + req.params.id);
}
function destroy(req, res) {

    const id = parseInt(req.params.id);

    const ricetta = posts.find(ricetta => ricetta.id === id);

    if (!ricetta) {
        res.status(404);

        return res.json({
            status: 404,
            console: 'not found',
            message: 'ricetta non trovata'
        })
    }
    posts.splice(posts.indexOf(ricetta), 1);

    res.sendStatus(204);
    console.log(posts);
}
// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }