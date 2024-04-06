const express = require("express");
const router = express.Router();
const Sousetat = require("../classes/sousetat");

router.get("/", async (req, res) => {
  try {
    const sousetat = await Sousetat.find();
    res.status(200).send(sousetat);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sousetat = await Admin.findById(id);
    res.status(200).send(sousetat);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
