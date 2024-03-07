const { insertPrgm, insertPrgms, updateOneDetail, updateManyDetails, deleteOneDetail, deleteManyRecord } = require('../daos/program');
const ObjectID = require('bson-objectid');
function insertPrgmCal(data) {
   insertPrgm(data);
}
function insertPrgmcals(data) {
   insertPrgms(data);

}
async function updateOne(data, id) {
   const query = { _id: ObjectID(id) };
   await updateOneDetail(data, query);

}
async function updateMany(value, target){
   await updateManyDetails(target, value);
}
async function deleteOne(data, id){
   const query = { _id: ObjectID(id)};
   await deleteOneDetail(data, query);

}
async function deleteMany(target){
   await deleteManyRecord(target);
}


module.exports = { insertPrgmCal, insertPrgmcals, updateOne, updateMany, deleteOne, deleteMany};