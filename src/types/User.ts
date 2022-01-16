export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}


export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role?: USER_ROLE
}


export type Band = {
    id: string,
    name: string,
    music_genre: string,
    responsible: string
}


export enum SCHEDULE_DAY {
    SEXTA = "SEXTA",
    SABADO = "SÁBADO",
    DOMING = "DOMINGO"
}

export type Schedule = {
    id: string,
    week_day: SCHEDULE_DAY,
    start_time: number,
    end_time: number,
    band_id: string
}


