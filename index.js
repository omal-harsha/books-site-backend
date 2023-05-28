import express from "express"
import {db} from "./database.js"

const app = express()
app.use(express.json());

app.get("/", (req,res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    }) 
})

app.post("/createbooks", (req,res) => {
    const q =  "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("book has been created successfully")
    })
})

app.listen(process.env.PORT || 8800, () => {
    console.log("Connected to backend")
})