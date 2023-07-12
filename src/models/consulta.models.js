import db from "../config/database.js";
import { Sequelize } from "sequelize";

class Consulta {
    constructor(fecha, horaAtencion, box) {
        this.fecha = fecha;
        this.horaAtencion = horaAtencion;
        this.box = box;
    }
}

const consultaModel = db.define(
    "Consulta",
    {
        fecha: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        horaAtencion: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        box: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

Consulta.getAllConsulta = async () => {
    try {
        await consultaModel.sync();
        return await consultaModel.findAll();
    } catch (error) {
        console.log("Error al obtener las consultas", error);
    }
};

Consulta.createConsulta = async (consulta) => {
    try {
        await consultaModel.sync();
        return await consultaModel.create(consulta);
    } catch (error) {
        console.log("Error al crear la consulta en el modelo", error);
    }
};

export { Consulta, consultaModel };
