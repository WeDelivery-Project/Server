const SousetatModel = require("../models/sousetatModel");

class Sousetat {
  //Rechercher une sous-etat parmis les etats deja disponibles
  static async find() {
    const se = await SousetatModel.find().populate("etat").exec();
    return se;
  }

  //Rechercher un sous etat en utilisant son id respectif

  static async findById(sousetat_id) {
    const se = await SousetatModel.findById(sousetat_id).exec();
    return se;
  }
}

module.exports = Sousetat;
