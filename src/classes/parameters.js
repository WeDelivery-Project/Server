const ParametersModel = require ("../models/parametersModel")

class Parameters {


    //update the parameters of the super admin 

    //update Admin en rajoutant un parametre (Id) pour identifier l'admin 

    static async update(id, parameters) {
        const par = await ParametersModel.updateOne({ _id: id }, { $set: parameters }).exec();
        return par;
    }

}

module.exports = Parameters
