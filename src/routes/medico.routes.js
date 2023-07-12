import { Medico } from "../models/medico.models.js";

import { Router } from "express";
const routes = Router();

routes.get("/", async (req, res) => {
    try {
        const medico = await Medico.getAllMedico();

        res.status(200).json({
            ok: true,
            msg: "Mostrando Medicos",
            body: medico,
        });
    } catch (error) {
        console.log("Error al obtener medicos");
    }
});

routes.post("/create", async (req, res) => {
    try {
        const medico = await Medico.createMedico(req.body);

        res.status(200).json({
            ok: true,
            msg: "Creando Medico",
            body: medico,
        });
    } catch (error) {
        console.log("Error al crear medico");
    }
});

export default routes;
