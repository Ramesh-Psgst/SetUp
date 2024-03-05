const {MongoClient} = require('mongodb');

const client =  new MongoClient("mongodb://127.0.0.1:27017");
const database = client.db("setUp");

function getCollection(collectionName){
    return database.collection(collectionName);

}
module.exports={getCollection};
