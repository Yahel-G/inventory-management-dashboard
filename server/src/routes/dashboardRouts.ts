import { Router } from "express";
import { getDashboardMeterics } from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboardMeterics);

export default router;