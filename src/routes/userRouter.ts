import { Router } from "express"
import { signup } from "../endpoints/signup"

export const useRouter = Router()

useRouter.post("/", signup)