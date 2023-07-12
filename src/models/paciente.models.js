import db from "../config/database.js";
import { Sequelize } from "sequelize";

class Paciente {
    constructor(nombre, rut, direccion) {
        this.nombre = nombre;
        this.rut = rut;
        this.direccion = direccion;
    }
}

const pacienteModel = db.define(
    "Paciente",
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
    },
    {
        freezeTableName: true,
    }
);

Paciente.getAllPaciente = async () => {
    try {
        await pacienteModel.sync();
        return await pacienteModel.findAll();
    } catch (error) {
        console.log("Error al obtener pacientes", error);
    }
};

Paciente.createPaciente = async (paciente) => {
    try {
        await pacienteModel.sync();
        return await pacienteModel.create(paciente);
    } catch (error) {
        console.log("Error al crear paciente en el modelo", error);
    }
};

export { Paciente, pacienteModel };
