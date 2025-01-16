export type menuItem = {
    id: number
    name: string
    price: number
}

//tomamos lo que tiene menuItem y lo asignamos a orderItem
export type orderItem = menuItem &  {
    quantity: number // se le añade nueva propiedad
}