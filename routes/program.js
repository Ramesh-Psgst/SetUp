const express = require('express');
var router = express.Router();
const { insertPrgmCal, insertPrgmcals } = require('../services/program');
const { updateOne, updateMany} = require('../services/program');
const { deleteOne, deleteMany } = require('../services/program');
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
router.put('/updateone/:id', async (req, res) => {
    try {

        await updateOne(req.body, req.params.id);
        res.send('updated');

    }
    catch (err) {
        res.send(err.message)
    }
})
//update many documents
router.post('/updatemany', async(req, res)=>{
    try{
        const target= req.body.batchYear;
        const semester=req.body.semester;
        await updateMany(semester, target);
        res.send('updated');

    }
    catch(err){
        res.send(err.message);
    }
})
//delete one record
router.delete('/deleteone/:id', async(req, res)=>{
    try{
        await deleteOne(req.body, req.params.id);
        res.send('record deleted sucessfully')

    }
    catch(err){
        res.send(err.message);
    }
})
//delete many records
router.delete('/deletemany', async(req, res)=>{
    try{
        const target= req.body.batchYear;
           await deleteMany( req.body, target);
        res.send('record deleted sucessfully');
    }
    catch(err){
        res.send(err.message);
    }
    
})
module.exports = router;    