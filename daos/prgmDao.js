const {getCollection}= require('./connection');

function insertPrgm(){
    
    const collection =getCollection("programCalendar");
    // collection.insertOne({departmentId:id ,departmentName:name, programmeType:type , classtId:cId , className:cName , batchId:bId , academicStart:start ,
    //     academicEnd:End });
    collection.insertOne({departmentId:id });


}


module.exports={insertPrgm}; 