import express from "express"
//import {db} from "./database.js"

const app = express()

app.get("/", (req,res) => {
    res.json("hello this is the backend")
})

// app.get("/books", (req,res) => {
//     const q = "SELECT * FROM books";
//     db.query(q, (err,data) => {
//         if(err) return res.json(err)
//         return res.json(data)
//     }) 
// })

app.listen(process.env.PORT || 8800, () => {
    console.log("Connected to backend")
})