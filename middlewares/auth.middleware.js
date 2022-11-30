const JWT = require("jsonwebtoken");
const { statusCode } = require("../utils/constants.js")
const { jsonGenerate } = require("../utils/helpers.js")

exports.auth=async (req,res,next) =>
{
    if(req.headers['auth'] === undefined)
    {
        return res.status(statusCode.AUTH_ERROR).json(jsonGenerate("ACESSS DENIEND"))
    }

    const token = req.headers['auth'];
    try {
        
        const {MYSECRET_KEY}=process.env
        const decode= await JWT.verify(token, MYSECRET_KEY)
        console.log(decode);
        req.userId=decode.id
        console.log(req.userId);
        req.username=decode.user;
        console.log(req.username);
        return next();

    } catch (error) {
        return res.status(statusCode.AUTH_ERROR).json(jsonGenerate("invalid token"))
    }
}