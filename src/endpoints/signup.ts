import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from "../types/User"

export const signup = async(req:Request, res:Response):Promise<void> => {

    try {
        
        const {name, email, password, role} = req.body

        if(!name || !email ||!password){
            throw new Error("Verifique se todos os parâmetros estão sendo passados!")
        }

        const [verifyEmail] = await connection("lama_users").where({email})

        if(verifyEmail){
            throw new Error("Usuário já cadastrado!")
        }

        const user : User = {
            id: Date.now().toString(),
            name,
            email,
            password,
            role
        }

        await connection("lama_users").insert(user)

        res.status(201).send({message: "Usuário cadastrado com sucesso!"})


    } catch (error:any) {

        res.status(400).send({message: error.sqlMessage || error.message})
        
    }
}