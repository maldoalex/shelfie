module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .list_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "error" });
        console.log(err);
      });
  }
};
