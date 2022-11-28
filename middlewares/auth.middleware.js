const JWT = require("jsonwebtoken");
const { statusCode } = require("../utils/constants.js")
const { jsonGenerate } = require("../utils/helpers.js")

exports.auth=async (req,res,next) =>
{
    if(req.headers['auth'] === undefined)
    {
        return res.json(jsonGenerate(statusCode.AUTH_ERROR,"ACESSS DENIEND"))
    }

    const token = req.headers['auth'];
    try {
        
        const {MYSECRET_KEY}=process.env
        const decode= await JWT.verify(token, MYSECRET_KEY)
        req.userId=decode.userId
        req.username=decode.username;
        return next();

    } catch (error) {
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,"invalid token"))
    }
}