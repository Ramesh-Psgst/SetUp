const {insertPrgm} = require('../daos/prgmDao');

function insertPrgmCal(req,res){
    insertPrgm(req.body);
    

}
module.exports={insertPrgmCal};