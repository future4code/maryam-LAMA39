import { Router } from "express"
import { getPresentations } from "../endpoints/getPresentations"
import { schedulePresentation } from "../endpoints/schedulePresentation"

export const presentationRouter = Router()

presentationRouter.get("/:week_day", getPresentations)
presentationRouter.post("/", schedulePresentation)