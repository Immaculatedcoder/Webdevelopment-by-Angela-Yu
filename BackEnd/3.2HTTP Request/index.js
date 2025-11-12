import express from "express";
const app = express();
const port = 3001;

app.get("/", (req,res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello<\h1>");
})

app.get("/contact", (req,res)=>{
    res.send("Here is my contact!")
})

app.get("/about", (req,res)=>{
    res.send("Here I am, send me!")
})
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})