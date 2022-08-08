import { ItemListContainer } from "./ItemListContainer"
import homeImage from "../assets/apple-refurb-products-home-201810.png"
import '../styles/home.css'
import { LinksProductos } from "./LinksProductos"

export const ItemContainer = () => {

    return (
        <div>
        <div className="conteiner-header">
            <div className="txt-container">
            <h2 className="title">Guaranteed Apple quality.</h2>
            <p className="parrafo">Certified refurbished products are backed by a one-year warranty and the Apple Certified Refurbished promise.</p>
            <p className="link-parrafo">Learn More</p>
            </div>

            <div className="images">
                <img src={homeImage} alt="" />
            </div>
        </div>
        <ItemListContainer publisher='ofertas'/>
        </div>
    )
}
