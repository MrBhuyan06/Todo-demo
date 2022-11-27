const {check}=require("express-validator");

exports.LoginSchema=[
    check("username",'username is required').exists().isAlphanumeric().withMessage("Username should be alphanumeric character only").trim().isLength({min:6,max:32}),
    check("password", "password is required").exists().isLength({min:6,max:20}).trim(),
]