const posts = require('../posts');

// function index(req, res) {
//     res.send('Lista delle pizze');
// }
function index (req, res){
    res.json(posts);
};

function show(req, res) {
    
    const id =parseInt(req.params.id);

    const ricetta = posts.find(ricetta=> ricetta.id === id);
    res.json(ricetta);
}
function store(req, res) {
    res.send('Creazione nuova pizza');
}
function update(req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
}
function modify(req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
}
function destroy(req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
}
// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }