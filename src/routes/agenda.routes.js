import { Router } from "express";
import { Agenda } from "../models/agenda.models.js";

const routes = Router();

routes.get("/", async (req, res) => {
    try {
        const agenda = await Agenda.getAllAgenda();
        res.status(200).json({
            ok: true,
            msg: "Mostrando Agenda",
            body: agenda,
        });
    } catch (error) {
        console.log("Error al obtener pacientes", error);
    }
});

routes.post("/create", async (req, res) => {
    try {
        const agenda = await Agenda.createAgenda(req.body);
        res.status(200).json({
            ok: true,
            msg: "Creando Agenda",
            body: agenda,
        });
    } catch (error) {
        console.log("Error al crear paciente en el modelo", error);
    }
});

export default routes;
