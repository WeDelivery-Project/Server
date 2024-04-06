const express = require("express");
const router = express.Router();
const Envoi = require("../classes/envoi");
const auth = require("./auth/auth");
const apiKeyMiddleware = require("../../middleware/apiKey");

// Find a Shipment

router.get("/", apiKeyMiddleware, auth, async (req, res) => {
  try {
    const envoi = await Envoi.find();
    res.status(200).send(envoi);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/get-many", apiKeyMiddleware, auth, async (req, res) => {
  try {
    const envoi = await Envoi.findMany(req.body);
    res.status(200).send(envoi);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/by-client", apiKeyMiddleware, auth, async (req, res) => {
  try {
    const envoi = await Envoi.findClientEnvoi(req.auth.id);
    res.status(200).send(envoi);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/by-livreur", apiKeyMiddleware, auth, async (req, res) => {
  try {
    const envoi = await Envoi.findCLivreurEnvoi(req.auth.id);
    res.status(200).send(envoi);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/count", apiKeyMiddleware, auth, async (req, res) => {
  try {
    const count = await Envoi.getNextNumCommand();
    console.log(count);
    res.status(200).send({ count });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Create UN ENVOI

router.post("/", apiKeyMiddleware, auth, async (req, res) => {
  try {
    if (req.auth.type !== "admin" && req.auth.type !== "client")
      return res.status(403).send("Vous n'êtes pas autorisé");

    let envoi = req.body;
    const numcommand = await Envoi.getNextNumCommand();

    if (req.auth.type !== "admin")
      envoi = {
        ...envoi,
        client: req.auth.id,
      };

    const newEnvoi = await Envoi.create({ ...envoi, numcommand });
    try {
      await Envoi.setCreationDate(newEnvoi._id);
    } finally {
      console.log("newEnvoi");
      console.log(newEnvoi);
    }
    res.status(201).send(newEnvoi);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const envoi = await Envoi.findById(id);
    res.status(200).send(envoi);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const envoi = req.body;
    const _id = req.params.id;

    const result = await Envoi.update(_id, envoi);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const envoi = req.params.id;
    const deletedEnvoi = await Envoi.delete(envoi);
    res.status(200).send(deletedEnvoi);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/delete", async (req, res) => {
  try {
    console.log(req.body);
    const deletedEnvoi = await Envoi.deleteMany(req.body);
    res.status(200).send(deletedEnvoi);
  } catch (error) {
    // console.log(error);
    res.status(500).send(error);
  }
});

router.put("/etats/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const etats = await Envoi.updateEtats(id, req.body);
    res.status(200).send(etats);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/cancel/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const etat = await Envoi.cancelEtat(id);
    res.status(201).send(etat);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/confirm/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const etat = await Envoi.confirmeEtat(id);
    res.status(200).send(etat);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/update/:idEtat", async (req, res) => {
  try {
    const { idEtat } = req.params;
    const newEtat = await Envoi.updateManyEtat(req.body, idEtat);
    res.status(200).send(newEtat);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
