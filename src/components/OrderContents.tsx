import { formatCurrency } from "../helpers"
import { menuItem, orderItem } from "../types"

type OrderContentsProps = {
    order: orderItem[], 
    removeItem: (id: menuItem['id']) => void
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div>
        <h2 className='text-3xl'>Consumo</h2>

    {/*Iterar sobre nuestra orden */}

    <div className="space-y-3 mt-5">
            {order.map( item => (
                <div 
                key={item.id}
                className="flex justify-between border-t border-indigo-300 py-5 last-of-type:border-b"
                >
                    <div>
                        <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                        <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                    </div>
                   
                    <button className="bg-red-600 h-8 w-8 rounded-full text-white hover:bg-red-300"
                    onClick={() => removeItem(item.id)}>
                        X
                    </button>
                </div>
            ))
        }
    
    


    </div>

    </div>
  )
}
