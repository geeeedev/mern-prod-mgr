const prdmgrController = require("../controllers/prdmgr.controller");

module.exports = (app) => {
  app.post("/api/prds/new", prdmgrController.create);
  app.get("/api/prds", prdmgrController.getAll);
  app.get("/api/prds/:id", prdmgrController.getOne);
  app.put("/api/prds/:id", prdmgrController.update);
  app.delete("/api/prds/:id", prdmgrController.delete);
};
