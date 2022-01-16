import { Request, Response } from "express"
import { connection } from "../connection"

export const getPresentations = async(req:Request, res:Response):Promise<void> => {

    try {
        
        const {week_day} = req.params

        const order = req.query.order === "DESC" ? "DESC" : "ASC"


        const [presentations] = await connection.raw(`
        SELECT LB.name, LB.music_genre, LP.start_time FROM lama_band as LB
        JOIN lama_band_performance as LP ON LB.id = LP.band_id
        WHERE LP.week_day = "${week_day}"
        ORDER BY LP.start_time ${order};
        `)

        if(!presentations){
            throw new Error("Não existem apresentações agendadas!")
        }


        res.status(200).send(presentations)


    } catch (error:any) {

        res.status(400).send({message: error.sqlMessage || error.message})
        
    }
}