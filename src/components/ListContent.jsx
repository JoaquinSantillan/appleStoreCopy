import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/ListContainer.css'

export const ListContent = ({id,save,title,afterPrice,image,price}) => {

    return (
    <div className='item'>
    <div className='item-image'>
    <img src={image}/>
    </div>
    <div className='content'>
    <Link className='linkT' to={`/detail/${id}`}>
    <p className='title-item'>{title}</p>
    </Link>
    <p className='price'>${price}</p>
    <div className='after-content'>
    <p className='afterprice'>${afterPrice}</p>
    <p className='saveprice'>save to ${save}</p>
    </div>
    </div>
    </div>
    )
}
