const mongoose=require('mongoose')
const MONGODB_URl=process.env.MONGODB_URl
 exports.connection =() =>
{
    mongoose.connect(MONGODB_URl).then((conn ) =>
    {
        console.log(`Db Connected at ${conn.connection.host}`);
    }).catch((error) =>
    {
        console.log(error);
    })
}
