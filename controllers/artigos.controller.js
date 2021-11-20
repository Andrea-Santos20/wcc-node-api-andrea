// regras de negócio do sistema de artigos

const { response } = require("express");
const { connectionStringUrl } = require("../config/db.config");
const database = require("../models");
const tabelaArtigo = database.artigos;

//criar artigos
exports.create = (request, response) => {
    const{titulo, descricao, publicado} = request.body;
    const artigo = {
        titulo,
        descricao,
        publicado,
    };

    if(!artigo.titulo){
        return response
        .status(400)
        .send("O artigo precisa conter ao menos o título definido")
    }
    // a promise pode ser resovida 
    // ou será rejeitada (exemplo: ocorreu um erro ao tentar salvar)
    tabelaArtigos
    .create(artigo)
    .then(function () {
        response.send("Artigo criado com sucesso!");
    }) 
    .catch(function (error) {
       // console.log(error);
        response.status(500).
        send({ message: "Ocorreu um erro ao salvar o artigo."});
    });
};

exports.findAll = (request, response) => {
    tabelaArtigos
    .findAll()
    .then(function (data) {
        response.send(data);
    })
    .catch(function() {
        response.status(500)
        .send({ message: "Ocorreu um erro ao buscar todos os artigos." });
    });

};

exports.findByTitle = (request, response) => {
    //const {titulo:artigo} = request.query
    const tituloArtigo = request.query.titulo;
    tabelaArtigos
      .findOne({ where: { titulo: tituloArtigo} })
      .then(function (data) {
        if (data) {
          response.send(data);
        } else {
          response.status(404).send({
            message:
              "Não foi possível encontrar um artigo com o titulo: " +
              tituloArtigo,
          });
        }
      })
      .catch(function () {
        response.status(500).send({
          message:
            "Ocorreu um erro ao buscar o artigo com titulo: " + tituloArtigo,
        });
      });
  };

exports.findById = (request, response) => {
    const idArtigo = request.query.id;
    tabelaArtigos
      .findByPk(idArtigo)
      .then(function (data) {
        if (data) {
          response.send(data);
        } else {
          response.status(404).send({
            message: "Não foi possível encontrar um artigo com o id: " + idArtigo,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        response.status(500).send({
          message: "Ocorreu um erro ao buscar o artigo com titulo: " + idArtigo,
        });
      });
  };


  //exemplo de atribuição e renomeação
  const desestruturaObj = () => {
    const objExemplo = { di: 1 };
    //renomear por desestruturação
    const { id: idObj } = objExemplo;
    //atribuir valor por desestruturação
    const { name = 'N/A' } = objExemplo;
  };