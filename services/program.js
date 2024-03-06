const {insertPrgm, insertPrgms, updateOneDetail} = require('../daos/program');

function insertPrgmCal(data){
    insertPrgm(data);
}
 function insertPrgmcals(data){
    insertPrgms(data);

 }
 function updateOne(name, doc){
    updateOneDetail(name, doc);
 }


module.exports={insertPrgmCal, insertPrgmcals, updateOne};