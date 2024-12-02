import { Router } from "express";

import { obteanalitic } from "../controllers/anali.controller.js";

const router = Router()

router.get("/analitic", obteanalitic);

export default router