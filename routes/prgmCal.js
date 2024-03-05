const express = require('express');
var router = express.Router();
const {insertPrgmCal} = require('../services/prgmSevices')

// router.get('/', (req, res)=>{
//     res.send('Hello');
// })

router.post('/', (req, res)=>{
    insertPrgmCal(req);

})
module.exports=router; 