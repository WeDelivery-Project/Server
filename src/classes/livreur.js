const LivreurModel = require("../models/livreurModel");
const bcrypt = require("bcrypt");

class Livreur {
  static async create(livreur) {
    console.log(livreur);
    livreur.password = await bcrypt.hash(livreur.password, 10);
    const liv = await LivreurModel.create(livreur);
    return liv;
  }

  //find an Livreur
  static async find() {
    const liv = await LivreurModel.find().exec();
    return liv;
  }

  //find an Livreur
  static async findByEmail(email) {
    const liv = await LivreurModel.findOne({ email }).exec();
    return liv;
  }

  //find an Livreur with his id
  static async findById(Livreur_id) {
    const liv = await LivreurModel.findById(Livreur_id).exec();
    return liv;
  }

  //update Livreur

  //update Livreur en rajoutant un parametre (Id) pour identifier le livreur

  static async update(id, livreur) {
    const liv = await LivreurModel.updateOne(
      { _id: id },
      { $set: livreur }
    ).exec();
    return liv;
  }

  //delete Livreur
  static async delete(Livreur) {
    const liv = await LivreurModel.deleteOne({ _id: Livreur }).exec();
    return liv;
  }
}

module.exports = Livreur;
