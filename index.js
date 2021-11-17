const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", function(req, res){
    res.send("Minha primeira requisição.");
});

app.get("/segunda-req", function(req, res){
    res.send("Minha Segunda requisição");
});

app.get("/com-parametros", function(req, res) {
    if(req.query.nome === "Andrea"){
        res.send ("Andrea chamou requisição")
    }
    res.send("Com parametros funciona! Sabadou " + req.query.nome);
});

app.post("/meu-primeiro-post", function(req, res) {
    console.log(req.body);
    res.send("Meu post funcionou!")
});

app.put("/meu-primeiro-put/:id", function(req, res) {
    console.log(req.body, req.params.id);
    res.send("Meu pout funcionou!")
});

app.delete("/meu-primeiro-delete/:id", function(req, res) {
    console.log(req.params.id);
    res.send("Meu delete funcionou! " + req.params.id)
});

app.listen(port, function(){
    console.log("ouvindo a porta: ", port);
});

