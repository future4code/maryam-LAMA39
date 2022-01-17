import { Request, Response } from "express"
import { connection } from "../connection"
import { Schedule} from "../types/User"

export const schedulePresentation = async(req:Request, res:Response):Promise<void> => {

    try {
        
        const {week_day, start_time, end_time, band_id} = req.body

        if(!week_day || !start_time ||!end_time || !band_id){
            throw new Error("Verifique se todos os parâmetros estão sendo passados!")
        }
        
        //Verficando se a banda existe na tabela de bandas
        const [verifyBandId] = await connection("lama_band")
            .select()
            .where({id:band_id})

        if(!verifyBandId){
            throw new Error("Verifique se esta banda é cadastrada!")
        }


        //Verficando se a banda existe na tabela de bandas
        const [verifyDAY] = await connection("lama_band_performance")
            .select()
            .where({week_day:week_day})
    

        const [verifyTIME] = await connection("lama_band_performance")
            .select()
            .where({start_time:start_time})

           if(verifyDAY && verifyTIME){
                throw new Error("dia e horário já  agendado!")
            }

       
        //Verficando horário permitido
        if(start_time<8 || start_time> 22){
            throw new Error("Horário de início não permitido!")
        }

        if(end_time<9 || end_time> 23){
            throw new Error("Horário de término não permitido!")
        }

        if(end_time< start_time+1){
            throw new Error("Horário de término não permitido!")
        }

       

        const schedule : Schedule = {
            id: Date.now().toString(),
            week_day,
            start_time,
            end_time,
            band_id
        }

        await connection("lama_band_performance").insert(schedule)

        res.status(201).send({message: "Apresentação agendada com sucesso!"})


    } catch (error:any) {

        res.status(400).send({message: error.sqlMessage||error.message })
        
    }
}

