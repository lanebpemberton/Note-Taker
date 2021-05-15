//setup router
let router = require('express').Router();
//setup getnotes route
let getnotes = require('./getnotes')
//setup save note route
let savenote = require('./savenote');
//setup delete note route
let deletenote = require('./deletenote');
//connect routes to router
router.get('/getnotes',getnotes);
router.post('/savenote',savenote);
router.delete('/deletenote',deletenote);
//export router to server
module.exports = router;