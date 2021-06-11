const E = require('../controllers/e.controller');
module.exports = function(app){
    app.post('/api/pet', E.createe)
    app.get('/api/pet', E.getAll)
    app.get('/api/pet/:id', E.getOne)
    app.put('/api/pet/:id', E.updatee)
    app.delete('/api/pet/:id', E.deletee)

} 