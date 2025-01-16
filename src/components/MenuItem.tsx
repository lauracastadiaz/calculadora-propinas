import { formatCurrency } from "../helpers"
import type { menuItem } from "../types"

type MenuItemProps = {
    item: menuItem
    addItem: (item: menuItem) => void
}


export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button className="border-2 bg-indigo-50 border-indigo-200 w-full p-4 m-1 flex justify-between hover:bg-indigo-300"
    onClick={() => addItem(item)}>

        <p>{item.name}</p>
        <p className="font-black">{formatCurrency(item.price)}</p>
    
    </button>

  )
}
