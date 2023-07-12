import { Licencia } from "../models/licencia.models.js";
import { Router } from "express";
const routes = Router();

routes.get("/", async (req, res) => {
    try {
        const licencia = await Licencia.getAllLicencia();
        res.status(200).json({
            ok: true,
            msg: "Mostrando Licencias",
            body: licencia,
        });
    } catch (error) {
        console.log("Error al obtener las licencias", error);
    }
});

routes.post("/create", async (req, res) => {
    try {
        const licencia = await Licencia.createLicencia(req.body);
        res.status(200).json({
            ok: true,
            msg: "Creando Licencia",
            body: licencia,
        });
    } catch (error) {
        console.log("Error al crear licencia en el modelo", error);
    }
});

export default routes;
