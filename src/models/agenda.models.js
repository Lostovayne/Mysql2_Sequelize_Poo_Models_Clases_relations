import db from "../config/database.js";
import { Sequelize } from "sequelize";
import { pacienteModel } from "./paciente.models.js";
import { consultaModel } from "./consulta.models.js";
import { medicoModel } from "./medico.models.js";

class Agenda {
    constructor(PacienteId, ConsultumId, MedicoId) {
        this.PacienteId = PacienteId;
        this.ConsultaId = ConsultaId;
        this.MedicoId = MedicoId;
    }
}

const AgendaModel = db.define(
    "Agenda",
    {
        PacienteId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "Paciente",
                key: "id",
            },
        },
        ConsultumId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "Consulta",
                key: "id",
            },
        },

        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        MedicoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "Medico",
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
    }
);

// Agenda - Paciente;
pacienteModel.hasMany(AgendaModel, { foreignKey: false });
AgendaModel.belongsTo(pacienteModel);

// Agenda - Consulta;
consultaModel.hasMany(AgendaModel, { foreignKey: false });
AgendaModel.belongsTo(consultaModel);

// Agenda - Medico;
medicoModel.hasMany(AgendaModel, { foreignKey: false });
AgendaModel.belongsTo(medicoModel);

Agenda.getAllAgenda = async () => {
    try {
        const agenda = await AgendaModel.findAll();
        return agenda;
    } catch (error) {
        console.log("Error al obtener Agendados", error);
    }
};

Agenda.createAgenda = async (agenda) => {
    try {
        await AgendaModel.sync();
        return await AgendaModel.create(agenda);
    } catch (error) {
        console.log("Error al crear la consulta en el modelo", error);
    }
};

export { Agenda, AgendaModel };
