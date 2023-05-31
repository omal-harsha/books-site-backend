import express from "express"
import {db} from "./database.js"
import cors from 'cors'

const app = express()
app.use(express.json());
app.use(cors())

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

app.get("/getbook/:id",(req,res) => {
    const bookId =  req.params.id
    const q =  "SELECT * FROM books WHERE id = ?"

    db.query(q,bookId, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/books/:id", (req,res) => {
    const bookId =  req.params.id
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q,bookId, (err,data) =>{
        if(err) return res.json(err)
        return res.json("Book has been delete successfully")
    })
})

app.put("/update/:id", (req,res) => {

    const bookId = req.params.id
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ? " 

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [...values, bookId], (err,data) => {
        if(err) return res.json(err)
        return res.json("book has been updated")
    })
})

app.post("/createbooks", (req,res) => {
    const q =  "INSERT INTO books (`title`, `desc`, `cover`,`price`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("book has been created successfully")
    })
})

app.listen(process.env.PORT || 8800, () => {
    console.log("Connected to backend")
})