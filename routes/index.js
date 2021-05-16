//setup router
let router = require('express').Router();
//setup getnotes route
let getnotes = require('./getnotes')
//setup save note route
let savenote = require('./savenote');
//setup delete note route
let deletenote = require('./deletenote');
//connect routes to router
router.get('/notes',getnotes);
router.post('/notes',savenote);
router.delete('/notes/:id',deletenote);
//export router to server
module.exports = router;