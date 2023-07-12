import db from "../config/database.js";
import { Sequelize } from "sequelize";
import { especialidadModel } from "./especialidad.models.js";

class Medico {
    constructor(nombre, rut, direccion, EspecialidadId) {
        this.nombre = nombre;
        this.rut = rut;
        this.direccion = direccion;
        this.EspecialidadId = EspecialidadId;
    }
}

const medicoModel = db.define(
    "Medico",
    {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rut: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },

        EspecialidadId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //Esto hace referencia a las tablas creadas fisicamente!
            references: {
                model: "Especialidad",
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
    }
);

especialidadModel.hasOne(medicoModel);
medicoModel.belongsTo(especialidadModel, { foreignKey: "EspecialidadId" });

Medico.getAllMedico = async () => {
    try {
        await medicoModel.sync();
        return await medicoModel.findAll();
    } catch (error) {
        console.log("Error al obtener medicos", error);
    }
};

Medico.createMedico = async (medico) => {
    try {
        await medicoModel.sync();
        return await medicoModel.create(medico);
    } catch (error) {
        console.log("Error al crear medico en el modelo", error);
    }
};

export { Medico, medicoModel };
