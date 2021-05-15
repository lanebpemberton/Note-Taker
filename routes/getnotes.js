module.exports = async function(req, res)
{
    //import file system library
    const fs = require('fs');
    //read json contents
    let dbRaw = fs.readFileSync(process.env['DB_File_Location']);
    //parse contents into json object
    let dbData = JSON.parse(dbRaw);
    //return json object
    res.status(200).json(dbData);
}