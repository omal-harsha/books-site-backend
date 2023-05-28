import mysql from "mysql2"

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "abc123",
//     database: "library"
// })

export const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bfcb0967a0bfee",
    password: "59a79e9f",
    database: "heroku_dc874a98c6a2a49"
})

//mysql://bfcb0967a0bfee:59a79e9f@us-cdbr-east-06.cleardb.net/heroku_dc874a98c6a2a49?reconnect=true