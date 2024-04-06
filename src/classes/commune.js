const CommuneModel = require("../models/communeModel");

class Commune {
  //Rechercher les communes
  static async find() {
    const com = await CommuneModel.find().exec();
    return com;
  }

  //Rechercher les communes d'une wilaya
  static async findWilayaCommunes(wilaya) {
    const com = await CommuneModel.find({ wilaya }).exec();
    return com;
  }

  //Retrouver une commune avec un element specifique
  static async findById(Commune_id) {
    const com = await CommuneModel.findById(Commune_id).exec();
    return com;
  }
}

module.exports = Commune;
