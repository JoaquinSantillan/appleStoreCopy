import { useMemo } from "react"
import { GetByPublisher } from "../helpers/GetByPublisher"
import { ListContent } from "./ListContent"
import '../styles/ListContainer.css'
import { LinksProductos } from "./LinksProductos"


export const ItemListContainer = ({publisher}) => {

    const items = useMemo(()=>GetByPublisher(publisher),[publisher])

    return (
    <div className="container-list">
        <LinksProductos/>
        {
            items.map(item=>(<ListContent key={item.id}{...item}/>))
        }
    </div>
    )
}
