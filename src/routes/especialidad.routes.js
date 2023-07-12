import { Especialidad } from "../models/especialidad.models.js";
import { Router } from "express";
const routes = Router();

routes.get("/", async (req, res) => {
    const especialidad = await Especialidad.getAllEspecialidad();

    res.status(200).json({
        ok: true,
        msg: "Mostrando Especialidades",
        body: especialidad,
    });
});

routes.post("/create", async (req, res) => {
    const especialidad = await Especialidad.createEspecialidad(req.body);

    res.status(200).json({
        ok: true,
        msg: "Creando Especialidad",
        body: especialidad,
    });
});

export default routes;
