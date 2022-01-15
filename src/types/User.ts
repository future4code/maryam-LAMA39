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

// export class User {
//     private id: string;
//     private name: string;
//     private password: string;
//     private role: USER_ROLE

//     constructor(id:string, name:string, password:string, role:USER_ROLE){

//         this.id = id
//         this.name = name
//         this.password = password
//         this.role = role
//     }

//     setterId(id:string){
//         this.id = id
//     }
//     setterName(name:string){
//         this.name = name
//     }
//     setterPassword(password:string){
//         this.password = password
//     }
//     setterRole(role:USER_ROLE){
//         this.role = role
//     }
// }