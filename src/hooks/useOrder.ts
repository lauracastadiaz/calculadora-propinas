import { useState } from "react"
import type { menuItem, orderItem } from "../types"


export default function useOrder() {

    // State
    const [order, setOrder] = useState<orderItem[]>([]) // state para colocar los elementos que forman parte de nuestra order (lo que hemos consumido en el bar)

    const [propina, setPropina] = useState(0) // state para propina

    
    // Función
    const addItem = (item: menuItem) => {
        
        //Ajustar quantity
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id 
                ? 
                {...orderItem, 
                    quantity: orderItem.quantity + 1} 
                :
                orderItem
            )
            setOrder(updatedOrder)
        }else{
            const newItem = {...item, quantity: 1} //copia de Item con la cantidad
            setOrder([...order, newItem])
        }
    }

    const restarItem = (id: menuItem['id']) => {
        const itemExist = order.find(orderItem => orderItem.id === id)
        
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === id 
                ? 
                {...orderItem, 
                    quantity: orderItem.quantity - 1
                } 
                :
                orderItem
            )
            if(updatedOrder.find(orderItem => orderItem.id === id)?.quantity === 0){
                setOrder(order.filter(item => item.id !== id)) } 
                else{
                    setOrder(updatedOrder)
                }
            
    }
}

    const removeItem = (id: menuItem['id']) => {
      setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        console.log("Guardando...")
        setOrder([])
        setPropina(0)
    }

  
   

    return {
        order,
        propina,
        setPropina,
        addItem,
        removeItem,
        placeOrder, 
        restarItem
    }
}