const express = require("express")
const router = express.Router()
const Role = require('../classes/role')


//Create a role 
router.post("/", async (req, res) => {
    try {
      const role = req.body;
      const newRole = await Role.create(role);
      res.status(201).send(newRole);
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  });
  
// Find a role 
  router.get("/", async (req, res) => {
    try {
      const role = await Role.find();
      res.status(200).send(role);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
//Find a role by ID 
  router.get("/:roles_id", async (req, res) => {
    try {
      const role_id = req.params.roles_id;
      const role = await  Role.findById(role_id);
      res.status(200).send(role);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const role = req.params.id 
      const deletedRole = await Role.delete(role)
      res.status(200).send(deletedRole)
    } catch (error) {
      res.status(500).send(error)
    }
  });

//Update a role 
  router.put("/:id", async (req, res) => {
    try {
      const role = req.body;
      const _id = req.params.id 
      const updatedRole = await Role.update(_id, role);
      res.status(200).send(updatedRole);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  
  module.exports = router;