import { datos } from "../Api/Api"

export const getById = (id = "")=>{
    return datos.find(item => item.id === id)
}