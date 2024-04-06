const express = require("express");
const router = express.Router();
const Parameter = require("../classes/parameters");

//Update Route
router.put("/:id", async (req, res) => {
  try {
    const parameter = req.body;
    const _id = req.params.id;

    const result = await Parameter.update(_id, parameter);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
