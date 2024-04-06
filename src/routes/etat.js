const express = require("express");
const router = express.Router();
const Etat = require("../classes/etat");

router.get("/", async (req, res) => {
  try {
    const etat = await Etat.find();
    res.status(200).send(etat);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const etat = await Etat.findById(id);
    res.status(200).send(etat);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
