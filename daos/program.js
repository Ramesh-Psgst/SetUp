const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect()
const database = client.db("Setup");
const collection = database.collection("WorkLoad");

function insertPrgm(data) {
    collection.insertOne(data);
}

function insertPrgms(data) {
    collection.insertMany(data);
}
 
async function updateOneDetail(data, query) {
    await collection.updateOne(query, { $set: data });
}

async function updateManyDetails(target, value){
    await collection.updateMany(target,{$set:value});
}

async function deleteOneDetail(query){
    await collection.deleteOne(query);
}
async function deleteManyRecord( target ){
    collection.deleteMany(target);
}
//db.student.updateMany({age:18},{$set:{eligible:"true"}})
//db.getCollection('WorkLoad').updateMany({"batchYear":2023},{$set:{"semester":5}})


module.exports = { insertPrgm, insertPrgms, updateOneDetail, updateManyDetails, deleteOneDetail, deleteManyRecord}; 