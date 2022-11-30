const {check}=require("express-validator");

exports.TodoSchema=[
    check("desc",'desc is required').exists()
]