const express = require('express');
var router = express.Router();
const { insertPrgmCal, insertPrgmcals } = require('../services/program');
const { updateOneDetail } = require('../daos/program');
// insert one document
router.post('/insertOne', (req, res) => {
    try {
        res.send(insertPrgmCal(req.body))
    }
    catch (err) {
        res.send(err.message)
    }

})
// insert many documents
router.post('/insertMany', (req, res) => {
    try {
        res.send(insertPrgmcals(req.body))
    }
    catch (err) {
        res.send(err.message)
    }
});
//update one document
router.post('/updateone', (req, res) =>{
    try{
        var name=req.body.academicTerm;
        var doc=req.body;
        res.send(updateOneDetail(name, doc))
    }
    catch(err){
        res.send(err.message)
    }
})
module.exports = router; 