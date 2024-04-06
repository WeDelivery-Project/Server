const PaiementModel = require("../models/paiementModel")

class Paiement {

    //Retrouver un paiement
    static async find(){

        const p = await PaiementModel.find().exec()
        return p
    } 

    //Retrouver un paiement 
    static async findbyClient()
    {
        const p  = await PaiementModel.findbyClient(client_id).exec()
        return p 
    }
  
   
    //update Admin en rajoutant un parametre (Id) pour identifier l'admin 

    static async update(id, paiement) {
        const p = await PaiementModel.updateOne({ _id: id }, { $set: paiement }).exec();
        return p;
    }
}
module.exports = Paiement