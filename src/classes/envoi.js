const EnvoiModel = require("../models/envoiModel");

class Envoi {
  // Create a shipment
  static async create(envoi) {
    const e = await EnvoiModel.create(envoi);
    return e;
  }

  static async setCreationDate(id) {
    const e = await EnvoiModel.findById(id).populate("etats.etat").exec();
    const index = e.etats.findIndex((e) => e.etat.code === 1);
    e.etats[index].date = Date.now();
    await e.save();
    return e;
  }

  //find an Envoi
  static async find() {
    const e = await EnvoiModel.find()
      .populate("client")
      .populate("wilaya")
      .populate("commune")
      .populate("etats.etat")
      .populate("etats.sousetat")
      .populate("livreur")
      .exec();
    return e;
  }

  //find an Envoi
  static async findClientEnvoi(id) {
    const e = await EnvoiModel.find({ client: id })
      .populate("client")
      .populate("wilaya")
      .populate("commune")
      .populate("etats.etat")
      .populate("livreur")
      .exec();
    return e;
  }

  //find an Envoi
  static async findCLivreurEnvoi(id) {
    const e = await EnvoiModel.find({ livreur: id })
      .populate("client")
      .populate("wilaya")
      .populate("commune")
      .populate("etats.etat")
      .populate("livreur")
      .exec();
    return e;
  }

  //get next num
  static async getNextNumCommand() {
    const e = await EnvoiModel.count().exec();
    return e + 1;
  }

  //find an Envoi with his id
  static async findById(envoi_id) {
    const e = await EnvoiModel.findById(envoi_id)
      .populate("client")
      .populate("wilaya")
      .populate("commune")
      .populate("etats.etat")
      .populate("livreur")
      .exec();
    return e;
  }

  //update Envoi

  //update Admin en rajoutant un parametre (Id) pour identifier l'admin

  static async update(id, envoi) {
    const e = await EnvoiModel.updateOne({ _id: id }, { $set: envoi }).exec();
    return e;
  }

  //delete Admin
  static async delete(envoi) {
    const a = await EnvoiModel.deleteOne({ _id: envoi }).exec();
    return a;
  }
  static async deleteMany(envois) {
    const a = await EnvoiModel.deleteMany({ _id: { $in: envois } }).exec();
    return a;
  }

  static async updateEtats(id, etats) {
    const a = await EnvoiModel.findByIdAndUpdate(id, {
      $set: { etats: etats },
    }).exec();
    return a;
  }

  static async confirmeEtat(_id) {
    const e = await this.findById({ _id });
    const index = e.etats.findIndex((x) => x.etat.code === 10);
    console.log(index);
    console.log(e.etats[index]);
    e.etats[index].date = Date.now();
    await e.save();
    return e;
  }

  static async cancelEtat(_id) {
    const e = await this.findById({ _id });
    const index = e.etats.findIndex((x) => x.etat.code === 7);
    console.log(index);
    console.log(e.etats[index]);
    e.etats[index].date = Date.now();
    await e.save();
    return e;
  }

  static async updateManyEtat(ids, idEtat) {
    let envoi = await EnvoiModel.find({ _id: { $in: ids } }).exec();
    envoi = envoi.map(async (e) => {
      const index = e.etats.findIndex((x) => x.etat.toString() === idEtat);
      console.log("index = ", index);
      e.etats[index].etat = idEtat;
      e.etats[index].date = Date.now();
      await e.save();
      return e;
    });
    return envoi;
  }

  static async findMany(ids) {
    let envoi = await EnvoiModel.find({ _id: { $in: ids } })
      .populate("client")
      .populate("wilaya")
      .populate("commune")
      .populate("etats.etat")
      .populate("livreur")
      .exec();
    return envoi;
  }
}

module.exports = Envoi;
