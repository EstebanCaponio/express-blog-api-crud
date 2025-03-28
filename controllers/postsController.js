const posts = require('../data/posts');

// function index(req, res) {
//     res.send('Lista delle pizze');
// }
function index(req, res) {
    res.json(posts);
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
    res.send('Creazione nuova ricetta');
}
function update(req, res) {
    res.send('Modifica integrale della ricetta ' + req.params.id);
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