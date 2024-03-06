const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect()
const database = client.db("Setup");
const collection = database.collection("WorkLoad")

function insertPrgm(data) {
    collection.insertOne(data);
}

function insertPrgms(data) {
    collection.insertMany(data);
}

function updateOneDetail(name, doc){
    collection.updateMany({academicTerm:name},{$set:doc});
    

}

module.exports = { insertPrgm, insertPrgms, updateOneDetail }; 