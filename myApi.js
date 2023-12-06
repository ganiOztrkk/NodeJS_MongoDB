//bir js dosyasını apiye dönüştürmek istiyorsak bir npm paketine ihtiyacımız var. bu paket express paketi - npm i express

//node js de indirdiğimiz bir paketi projemize dahil etmek için;

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
//api metotlarımız -- get post put delete

//ilk parametre, adres cubugunda apimizi nasıl cagıracagız bunu temsil ediyoruz.
app.get("/api",(req,res) =>{
    res.json({message : "api calisiyor"});
});

const todos = ["todo1", "todo2", "todo3"];

app.get("/api/getAll", (req, res) =>{
    res.json(todos);
});

app.post("/api/save",(req, res)=>{
    const {value} = req.body;
    todos.push(req.body.value);
    res.json({});
})

app.get("/api/removeByIndex/:id", (req, res)=>{
    const index = req.params.id;

    todos.splice(index,1);
    res.json(null);
})

app.listen(7001,()=>{
    console.log("api ayakta");
});

