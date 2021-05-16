module.exports = async function(req,res)
{
    //import file system library
    const fs = require('fs');
    //read json contents
    let dbRaw = fs.readFileSync(process.env['DB_File_Location']);
    //parse contents into json object
    let dbData = JSON.parse(dbRaw);
    //count number of item in array
    let propertyCount = dbData.length;
    //create object to add to dbData
    let newNoteObject = {
        "id":propertyCount,
        "title":req.body.title,
        "text":req.body.text
    }
    //push object to array
    dbData.push(newNoteObject);
    //write new data to file
    let dbRawToWrite = JSON.stringify(dbData);
    //write to file
    fs.writeFileSync(process.env['DB_File_Location'],dbRawToWrite);
    //return json object
    res.status(200).json(dbData);
}