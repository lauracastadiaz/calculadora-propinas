import { formatCurrency } from "../helpers"
import { orderItem } from "../types"
import { useMemo } from "react"


type TotalOrdersProps = {
    order: orderItem[],
    propina: number,
    placeOrder: () => void
}

export default function TotalOrders({order, propina, placeOrder}: TotalOrdersProps) {
  
    // subtotal 

    const subtotalAmount = useMemo(() => 
        order.reduce((total, item) => 
            total + (item.quantity*item.price), 0), 
    [order])

    // Propina

    const propinaAmount = useMemo(() => 
        subtotalAmount * propina, [propina, order])

    // total a pagar

    const totalAmount = useMemo(() => 
    subtotalAmount + propinaAmount, [propina, order])
  
    return (
    
    <>
    <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>

        <p>Subtotal: {''}
            <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>Propina: {''}
            <span className="font-bold">{formatCurrency(propinaAmount)} </span>
        </p>
        <p className="text-xl bg-cover bg-green-200">Total a Pagar: {''}
            <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>


    </div>

    <button className="w-full bg-indigo-600 p-3 uppercase text-white font-bold mt-10 disabled:opacity-15 hover:bg-indigo-400"
    disabled={totalAmount === 0}
    onClick={placeOrder}>Guardar Orden</button>
    </>
  )
}
