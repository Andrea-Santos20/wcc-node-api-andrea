// regras de negócio do sistema de artigos

const database = require("../models")
const tabelaArtigo = database.artigos;

//criar artigos
exports.create = (request, response) => {
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado
    };

    // a promise pode ser resovida 
    // ou será rejeitada (exemplo: ocorreu um erro ao tentar salvar)
    tabelaArtigo.create(artigo)
    .then(() => response.send("Artigo criado com sucesso"))
    .catch(() => response.status(500).send("Ocorreu um erro ao salvar o artigo"))
};