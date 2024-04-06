const EtatModel = require("../models/EtatModel");

class Etat {
  //find an Envoi
  static async find() {
    const et = await EtatModel.find().exec();
    return et;
  }

  //find an Envoi with his id
  static async findById(etat_id) {
    const et = await EtatModel.findById(etat_id).exec();
    return et;
  }
}

module.exports = Etat;
