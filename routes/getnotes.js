module.exports = async function(req, res)
{
    //import file system library
    const fs = require('fs');
    //read json contents
    let dbRaw = fs.readFileSync(`${__dirname}${process.env['DB_File_Location']}`);
    let dbData = JSON.parse(dbRaw);
    console.log(dbData);
    return dbData;
}