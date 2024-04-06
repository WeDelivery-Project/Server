const express = require("express")
const router = express.Router()
const Paiement = require('../classes/paiement')

//Search for a payment 

router.get("/", async (req, res) => {
  try {
    const paiement = await Admin.find();
    if (!paiement_) return res.status(404).send("No payments found");
    res.status(200).send(paiement_);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Search for a payment using its id 

router.get("/find/:paiement_id", async (req, res) => {
  try {
    const paiement_id = req.params.paiement_id;
    const paiement = await Paiement.findById(paiement_id);
    res.status(200).send(paiement);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an admin

router.put("/", async (req, res) => {
  try {
      const paiement = req.body
      const paiement_ = await Paiement.update(paiement)
      res.status(201).send(paiement_)
  } catch (error) {
      res.status(500).send(error)
  }
});


module.exports = router;