import { Request, Response } from "express"
import app from "./app"
import { signup } from "./endpoints/signup"

app.get("/", (req:Request, res:Response) => {
    console.log("Hello world")
})

app.post("/users",signup)