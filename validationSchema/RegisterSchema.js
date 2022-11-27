const {check}=require('express-validator');


exports.RegisterSchema=[
   check('name').trim().isAlpha().withMessage("Name should be Aphabets Only"),

    check("username",'username is required').exists().isAlphanumeric().withMessage("Username should be alphanumeric character only").trim().isLength({min:6,max:32}),

    check("password", "password is required").exists().isLength({min:6,max:20}).trim(),
    
    check("email",'email is required').exists().isEmail().withMessage("entry a valid email")
]