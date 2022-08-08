import React from "react"
export const ItemContext = React.createContext("")

export const CartProvider = ({children}) => {
    return (
    <ItemContext.Provider value='pablo'>
        {children}
    </ItemContext.Provider>
    )
}

