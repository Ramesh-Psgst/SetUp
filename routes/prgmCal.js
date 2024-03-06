const express = require('express');
var router = express.Router();
const {insertPrgmCal} = require('../services/prgmSevices')

router.post('/', (req, res)=>{
    try{
        res.send(insertPrgmCal(req.body))
    }
    catch(err){
        res.send(err.message)
    }

})
module.exports=router; 