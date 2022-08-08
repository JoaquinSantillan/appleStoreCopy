import React from 'react'

import mac from '../assets/mac.png'
import ipad from '../assets/ipad.png'
import iphone from '../assets/iphone.png'
import watch from '../assets/watch.png'
import appleTv from '../assets/appletv.png'
import clearence from '../assets/clearence.png'
import acc from '../assets/acesorios.png'
import { Link } from 'react-router-dom'

export const LinksProductos = () => {
    return (
        <div className='container-links'>
            <h1>Shop Refurbished</h1>
    <div className='productosLinks'>
        <Link to='/mac'>
        <img src={mac}/>
        </Link>
        <Link to='/ipad'>
        <img src={ipad}/>
        </Link>
        <Link to='/iphone'>
        <img src={iphone}/>
        </Link>
        <Link to='/watch'>
        <img src={watch}/>
        </Link>
        <Link to='/appleTv'>
        <img src={appleTv}/>
        </Link>
        <Link to='/features'>
        <img src={clearence}/>
        </Link>
        <Link to='/accesories'>
        <img src={acc}/>
        </Link>
    </div>
        </div>
    )
}
