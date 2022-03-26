const router = require('express').Router();
const fs = require('fs')
const util = require('util')


// GET /api/notes` should read the `db.json` file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    var dbNotes = fs.readFileSync('./db/db.json');
    console.log(dbNotes);
});


module.exports = router;