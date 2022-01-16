import { Router } from "express"
import { bandDetails } from "../endpoints/bandDetails"
import { createBand } from "../endpoints/createBand"

export const bandRouter = Router()

bandRouter.get("/:name", bandDetails)
bandRouter.post("/", createBand)