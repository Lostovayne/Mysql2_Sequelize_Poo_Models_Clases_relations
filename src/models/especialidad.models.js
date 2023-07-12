import { Sequelize } from "sequelize";
import db from "../config/database.js";

class Especialidad {
    constructor(id, codigo, descripcion) {
        this.id = id;
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}

const especialidadModel = db.define(
    "Especialidad",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        codigo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

// Mostrar las especialidades
Especialidad.getAllEspecialidad = async () => {
    try {
        await especialidadModel.sync();
        return await especialidadModel.findAll();
    } catch (error) {
        console.log("Error al obtener especialidades");
    }
};

// Crear una especialidad

Especialidad.createEspecialidad = async (especialidad) => {
    try {
        await especialidadModel.sync();
        return await especialidadModel.create(especialidad);
    } catch (error) {
        console.log("Error al crear especialidad");
    }
};

export { Especialidad, especialidadModel };
