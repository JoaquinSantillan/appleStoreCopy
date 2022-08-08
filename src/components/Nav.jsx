import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import '../styles/nav.css'
import apple from '../assets/apple.svg'
import cart from '../assets/bagstore.svg'
import arrow from '../assets/arrow.svg'

export const Nav = () => {

    const [show,setShow] = useState(false)

    const handleNav = (e)=>{
        e.stopPropagation();
        setShow(!show)
    }

    return (
    <div className='nav'>
    <NavLink className='linkNav' to="/"><img className='apple' src={apple}/></NavLink>
    <ul>
    <li><NavLink className='linkNav' to="/categoria">Browser All <img className='arrow' src={arrow}/></NavLink></li>
    <li>
        <img className='bag' src={cart} onClick={handleNav}/>
        <div className={show ? 'cart active' : 'cart'}>

        </div>
    </li>
    </ul>
    </div>
    )
}
