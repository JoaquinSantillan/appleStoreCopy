
import { datos } from "../Api/Api"

export const GetByPublisher = (publisher)=>{
    
    const validPublisher = ['normal','ofertas']

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} no es valido`)
    }

    return datos.filter(hero => hero.publisher === publisher)
}