import express from "express";
import homeControllers from "../controllers/homeControllers";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeControllers.getHomePage);
  router.get("/hoidanit", (req, res) => {
    return res.send("Hello word hoidanit");
  });
  router.get("/about", homeControllers.getAboutPage);


  return app.use("/", router);
};

module.exports = initWebRoutes;
