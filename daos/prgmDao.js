const {MongoClient} = require('mongodb');

const client =  new MongoClient("mongodb://127.0.0.1:27017");
client.connect()
const database = client.db("Setup");
const collection = database.collection("programCalendar")


function insertPrgm(data){
    collection.insertOne(data);
}


module.exports={insertPrgm}; 