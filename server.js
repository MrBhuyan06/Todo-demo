const app=require("./app.js");
const {PORT} =process.env || 4000;
// console.log(app);

app.listen(PORT,(req,res) =>
{
    console.log(`servre is running at http://localhost:${PORT}/api/v1`);
})