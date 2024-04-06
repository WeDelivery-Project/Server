const RamassageModel = require("../models/ramassageModel");

class Ramassage {
  static async create(ramassage) {
    const ram = await RamassageModel.create(ramassage);
    return ram;
  }

  //find an Envoi
  static async find() {
    const ram = await RamassageModel.find()
      .populate("wilaya")
      .populate("commune")
      .populate("client")
      .exec();
    return ram;
  }

  //find an Envoi with his id
  static async findById(ramassage_id) {
    const ram = await RamassageModel.findById(ramassage_id).exec();
    return ram;
  }

  //update Envoi

  //update Admin en rajoutant un parametre (Id) pour identifier l'admin

  static async updateIsPayed(id, isPayed) {
    const ram = await RamassageModel.updateOne(
      { _id: id },
      { $set: { isPayed } }
    ).exec();
    return ram;
  }

  static async updateStatus(id, status) {
    const ram = await RamassageModel.updateOne(
      { _id: id },
      { $set: { status } }
    ).exec();
    return ram;
  }

  static async update(id, ramassage) {
    const ram = await RamassageModel.updateOne(
      { _id: id },
      { $set: ramassage }
    ).exec();
    return ram;
  }

  //delete Envoi
  static async delete(ramassage) {
    const ram = await RamassageModel.deleteOne({ _id: ramassage }).exec();
    return ram;
  }

  static async findByClient(client) {
    const ram = await RamassageModel.find({ client })
      .populate("wilaya")
      .populate("commune")
      .populate("client")
      .exec();
    return ram;
  }

  // static async findByLivreur(livreur) {
  //   const ram = await RamassageModel.find({ livreur })
  //     .populate("wilaya")
  //     .populate("commune")
  //     .populate("client")
  //     .exec();
  //   return ram;
  // }
}

module.exports = Ramassage;
