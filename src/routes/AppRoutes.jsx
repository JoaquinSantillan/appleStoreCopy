import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartProvider } from '../components/context/CartProvider'
import { ItemContainer } from '../components/ItemContainer'
import {ItemDetail} from '../components/ItemDetail'
import { Nav } from '../components/Nav'
import { Accesorios } from '../components/pagesProducts/Accesorios'
import { AppleTv } from '../components/pagesProducts/AppleTv'
import { Clearence } from '../components/pagesProducts/Clearence'
import { Ipad } from '../components/pagesProducts/Ipad'
import { Iphone } from '../components/pagesProducts/Iphone'
import { Mac } from '../components/pagesProducts/Mac'
import { Watch } from '../components/pagesProducts/Watch'

export const AppRoutes = () => {
    return (
    <BrowserRouter>
    <CartProvider>
    <Nav/>
        <Routes>
            <Route path="/" element={<ItemContainer/>}/>
            <Route path="/mac/" element={<Mac/>}/>
            <Route path="/ipad" element={<Ipad/>}/>
            <Route path="/iphone" element={<Iphone/>}/>
            <Route path="/watch" element={<Watch/>}/>
            <Route path="/appletv" element={<AppleTv/>}/>
            <Route path="/features" element={<Clearence/>}/>
            <Route path="/accesories" element={<Accesorios/>}/>
            <Route path="/detail/:detailId" element={<ItemDetail/>}/>
        </Routes>
    </CartProvider>
    </BrowserRouter>
    )
}
