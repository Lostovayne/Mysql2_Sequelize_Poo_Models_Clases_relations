import express from "express";
import dotenv from "dotenv";
import EspecialidadRouter from "./routes/especialidad.routes.js";
import MedicoRouter from "./routes/medico.routes.js";
import PacienteRouter from "./routes/paciente.routes.js";
import ConsultaRouter from "./routes/consulta.routes.js";
import licenciaRouter from "./routes/licencia.routes.js";
import AgendaRouter from "./routes/agenda.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Crud Medicos!");
});

app.use("/especialidades", EspecialidadRouter);
app.use("/medicos", MedicoRouter);
app.use("/pacientes", PacienteRouter);
app.use("/consulta", ConsultaRouter);
app.use("/licencia", licenciaRouter);
app.use("/agenda", AgendaRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
