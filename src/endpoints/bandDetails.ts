import { Request, Response } from "express"
import { connection } from "../connection"

export const bandDetails = async(req:Request, res:Response):Promise<void> => {

    try {
        
        const {name} = req.params

        const [verifyName] = await connection("lama_band").where({name})

        if(!verifyName){
            throw new Error("Verifique se o nome está correto!")
        }


        const band = await connection("lama_band")
            .select()
            .where({name})

        res.status(200).send(band)


    } catch (error:any) {

        res.status(400).send({message: error.sqlMessage || error.message})
        
    }
}