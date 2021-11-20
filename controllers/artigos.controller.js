// regras de negócio do sistema de artigos

const database = require("../models");
const tabelaArtigo = database.artigos;

//criar artigos
exports.create = (request, response) => {
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado,
    };

    // a promise pode ser resovida 
    // ou será rejeitada (exemplo: ocorreu um erro ao tentar salvar)
    tabelaArtigos
    .create(artigo)
    .then(function () {
        response.send("Artigo criado com sucesso!");
    }) 
    .catch(function (error) {
       // console.log(error);
        response.status(500).send("Ocorreu um erro ao salvar o artigo.");
    });
};

exports.findAll = (request, response) => {
    tabelaArtigos
    .findAll()
    .then(function(data) {
    })
    .catch(function() {
        response.status(500).send("Ocorreu um erro ao buscar todos os artigos.");
    });
};