import { Router } from "express";
import { Consulta } from "../models/consulta.models.js";
const routes = Router();

routes.get("/", async (req, res) => {
    try {
        const consulta = await Consulta.getAllConsulta();
        res.status(200).json({
            ok: true,
            msg: "Mostrando Consultas",
            body: consulta,
        });
    } catch (error) {
        console.log("Error al obtener pacientes", error);
    }
});

routes.post("/create", async (req, res) => {
    try {
        const consulta = await Consulta.createConsulta(req.body);
        res.status(200).json({
            ok: true,
            msg: "Creando Consulta",
            body: consulta,
        });
    } catch (error) {
        console.log("Error al crear paciente en el modelo", error);
    }
});

export default routes;
