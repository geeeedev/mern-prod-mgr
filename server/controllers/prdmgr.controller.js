const PrdMgr = require("../models/prdmgr.model");

module.exports = {
  create(req, res) {
    PrdMgr.create(req.body)
      .then((newPrd) => {
        res.json(newPrd);
      })
      .catch((err) => {
        res.status(400).json(err);
        //res.json(err);
      });
  },
  getAll(req, res) {
    PrdMgr.find()
      .then((AllPrds) => {
        res.json(AllPrds);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  getOne(req, res) {
    PrdMgr.findById(req.params.id)
      .then((onePrd) => {
        res.json(onePrd);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  update(req, res) {
    PrdMgr.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((updatedPrd) => {
        res.json(updatedPrd);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  delete(req, res) {
    PrdMgr.findByIdAndDelete(req.params.id)
      .then((delPrd) => {
        res.json(delPrd);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};

// module.exports = {
//   create(req, res) {},
//   getAll(req, res) {},
//   getOne(req, res) {},
//   update(req, res) {},
//   delete(req, res) {},
// };
