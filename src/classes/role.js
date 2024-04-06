const RoleModel = require("../models/roleModel");

class Role {
  static async create(role) {
    const rl = await RoleModel.create(role);
    return rl;
  }

  static async find() {
    const rl = await RoleModel.find().exec();
    return rl;
  }

  static async findById(id) {
    const role = await RoleModel.findById(id).exec();
    return role;
  }

  static async findByName(name) {
    const role = await RoleModel.findOne({ name }).exec();
    return role;
  }

  //update Admin en rajoutant un parametre (Id) pour identifier l'admin


  static async update(id, role) {
    const rl = await RoleModel.updateOne({ _id: id }, { $set: role }).exec();
    return rl;
  }

   //delete Role
   static async delete(role) {
    console.log(role);
    const a = await RoleModel.deleteOne({ _id: role }).exec();
    return a;
  }

}

module.exports = Role;
