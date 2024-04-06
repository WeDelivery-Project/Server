const TarifModel = require("../models/tarifModel")

class Tarif {

    // Trouver la valeur des tarifs en fonction des wilayas
    static async FindbyWilaya(wilaya_id)
    {
        const tar = await TarifModel.FindbyWilaya(wilaya_id).exec()
        return t
    }

    // Apres avoir inscrit les tarifs de chaque wilaya l'admin pourra modifier ceux-la par la suite 
   
    //update Admin en rajoutant un parametre (Id) pour identifier l'admin 

    static async update(id, tarif) {
        const ad = await TarifModel.updateOne({ _id: id }, { $set: tarif }).exec();
        return t;
    }

}


module.exports = Tarif