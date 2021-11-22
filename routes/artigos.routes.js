// rotas do sistema de artigos

module.exports = (app) => {
  const artigosController = require("../controllers/artigos.controller");
  let router = require("express").Router();

  router.post("/", artigosController.create);

  router.get("/", artigosController.findAll); //obter artigos

  router.get("/findByTitle", artigosController.findByTitle); //busca o título

  router.get("/findById", artigosController.findById); //busca por Id

  router.get("/findAllPublished", artigosController.findAllPublished); //busca artigo por publicado

  router.put("/:id", artigosController.update); //atualizar por Id

  router.put("/", artigosController.updateMany); //atualizar dados existentes

  router.delete("/", artigosController.deleteAll); // deletar geral

  router.delete("/:id", artigosController.delete); //deletar especifico

  app.use("/artigos", router);
};

    