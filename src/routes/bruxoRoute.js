import { Router } from 'express';
import * as BruxoController from './../controllers/bruxoController.js';

const router = Router()

router.get("/", BruxoController.listarTodosBruxos);
router.get("/:id", BruxoController.buscarBruxoPorId);
router.post("/", BruxoController.criarBruxo);
router.delete("/:id", BruxoController.apagar);

export default router;