import db from "../config/database.js";
import { Sequelize } from "sequelize";
import { medicoModel } from "./medico.models.js";
import { pacienteModel } from "./paciente.models.js";

class Licencia {
    constructor(
        codigo,
        diagnostico,
        fecha_inicio,
        fecha_fin,
        MedicoId,
        PacienteId
    ) {
        this.codigo = codigo;
        this.diagnostico = diagnostico;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.MedicoId = MedicoId;
        this.PacienteId = PacienteId;
    }
}

const licenciaModel = db.define(
    "Licencia",
    {
        codigo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        diagnostico: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        fecha_inicio: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        fecha_fin: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        MedicoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //Esto hace referencia a las tablas creadas fisicamente!
            references: {
                model: "Medico",
                key: "id",
            },
        },

        PacienteId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //Esto hace referencia a las tablas creadas fisicamente!
            references: {
                model: "Paciente",
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
    }
);

// Licencia - Medico; 1 a muchos
medicoModel.hasMany(licenciaModel);
licenciaModel.belongsTo(medicoModel);

// Licencia - Paciente; 1 a muchos
pacienteModel.hasMany(licenciaModel);
licenciaModel.belongsTo(pacienteModel);

Licencia.getAllLicencia = async () => {
    try {
        await licenciaModel.sync();
        return await licenciaModel.findAll();
    } catch (error) {
        console.log("Error al obtener las licencias", error);
    }
};

Licencia.createLicencia = async (licencia) => {
    try {
        await licenciaModel.sync();
        return await licenciaModel.create(licencia);
    } catch (error) {
        console.log("Error al crear la licencia", error);
    }
};

export { Licencia, licenciaModel };
