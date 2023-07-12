import { Router } from "express";
import { Paciente } from "../models/paciente.models.js";
const routes = Router();

routes.get("/", async (req, res) => {
    try {
        const paciente = await Paciente.getAllPaciente();

        res.status(200).json({
            ok: true,
            msg: "Mostrando Pacientes",
            body: paciente,
        });
    } catch (error) {
        console.log("Error al obtener pacientes", error);
    }
});

routes.post("/create", async (req, res) => {
    try {
        const paciente = await Paciente.createPaciente(req.body);

        res.status(200).json({
            ok: true,
            msg: "Creando Paciente",
            body: paciente,
        });
    } catch (error) {
        console.log("Error al crear paciente en el modelo", error);
    }
});

export default routes;
