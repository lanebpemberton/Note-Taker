module.exports = async function(req, res)
{
    //get id from params
    let id = req.params.id;
    //import file system library
    const fs = require('fs');
    //read json contents
    let dbRaw = fs.readFileSync(process.env['DB_File_Location']);
    //parse contents into json object
    let dbData = JSON.parse(dbRaw);
    //check if note to delete exists
    for(let a = 0;a<dbData.length;a++)
    {
        if(dbData[a].id === id)
        {
            //remove object from array
            dbData.splice(a, 1);
            //write new data to file
            let dbRawToWrite = JSON.stringify(dbData);
            //write to file
            fs.writeFileSync(process.env['DB_File_Location'],dbRawToWrite);
            //finish looping
            break;
        }
    }
    //return json object
    res.status(200).json(dbData);
}