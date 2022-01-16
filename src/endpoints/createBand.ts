import { Request, Response } from "express"
import { connection } from "../connection"
import { Band} from "../types/User"

export const createBand = async(req:Request, res:Response):Promise<void> => {

    try {
        
        const {name, music_genre, responsible} = req.body

        if(!name || !music_genre ||!responsible){
            throw new Error("Verifique se todos os parâmetros estão sendo passados!")
        }

        const [verifyName] = await connection("lama_band").where({name})

        if(verifyName){
            throw new Error("Banda já cadastrada!")
        }

        const band : Band = {
            id: Date.now().toString(),
            name,
            music_genre,
            responsible
        }

        await connection("lama_band").insert(band)

        res.status(201).send({message: "Banda cadastrada com sucesso!"})


    } catch (error:any) {

        res.status(400).send({message: error.sqlMessage || error.message})
        
    }
}