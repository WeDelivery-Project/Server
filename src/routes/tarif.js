const express = require("express")
const router = express.Router()
const Tarif = require('../classes/tarif')

// Search for tarif 

  router.get("/", async (req, res) => {
    try {
      const tarif = await Tarif.find()
      res.status(200).send(tarif)
    } catch (error) {
      res.status(500).send(error)
    }
  });

// Search for tarif using its id 

  router.get("/find/:wilaya_id", async (req, res) => {
    try {
      const tarif_id = req.params.wilaya_id
      const tarif = await Tarif.FindbyWilaya(tarif_id)
      res.status(200).send(tarif)
    } catch (error) {
      res.status(500).send(error)
    }
  });
  
//it redirects you to the tariff page  

  router.put("/", async (req, res) => {
    try {
      const tarif = req.body
      const updatedTarif = await Tarif.update(tarif)
      res.status(200).send(updatedTarif)
    } catch (error) {
      res.status(500).send(error)
    }
  });

  
  module.exports = router;