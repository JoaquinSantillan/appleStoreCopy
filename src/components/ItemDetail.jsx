import { useMemo, useReducer } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getById } from "../helpers/GetById"
import '../styles/detail.css'
import bagApple from '../assets/bagstore.svg'
import truck from '../assets/truck.svg'
import saved from '../assets/saved.svg'
import comment from '../assets/comment.svg'


export const ItemDetail = () => {

    const {detailId} = useParams()
    const data = useMemo(()=> getById(detailId),[detailId])
    const navigate = useNavigate()


    const {
        id,
        title,
        description,
        price,
        image,
        save,
        afterPrice
    } = data

    const handleReturn = ()=>{
        navigate(-1,{
            replace:false
        })
    }
    


    return (
        <div className="container-detail">
            <div className="conteiner-txt-detail">
            <h1>{title}</h1>
            <p>${price}</p>
            <div className="saveprice">
                <p className="affter">${afterPrice}</p>
                <p>Save ${save}</p>
            </div>
            
            <div className="pickup">
            <div className="pickupimage">
            <img src={truck}/>
            </div>
            <div className="pickuptext">
            <h2 className="delivery">Delivery:</h2>
            <p className="inStock">In Stock
            Free Shipping</p>
            <p className="dates">Get delivery dates</p>
            </div>
            </div>

            <div className="pickup-apple">
            <div className="pickupimage-apple">
            <img className="imageaple" src={bagApple}/>
            </div>
            <div className="pickuptext-apple">
            <h2 className="applestore-pickup">pickup</h2>
            <p className="applestore-txt">Check availabitiy</p>
            </div>
            </div>

            <button> Add To Bag</button>

            <div className="help">
                <div className="stillContainer">
                    <div className="Stilldeciding">
                    <h2>Still deciding?</h2>
                    <p>Add this item to a list and easily come back to it later.</p>
                    </div>
                    <div className="image-saved">
                    <img src={saved}/>
                    </div>
                </div>
                <div className="help-globo">
                    <img src={comment} alt="" />
                    <p>Need some help? Contact us.</p>
                    </div>
                <div>

                </div>
            </div>
            </div>
            <div className="conteiner-images-detail">
            <img src={image}/>
            </div>
        </div>
    )
}
