const {insertPrgm} = require('../daos/prgmDao');

function insertPrgmCal(data){
    insertPrgm(data);
}
module.exports={insertPrgmCal};