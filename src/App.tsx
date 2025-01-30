import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import Propina from "./components/Propina";
import TotalOrders from "./components/TotalOrders";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const {order, propina, setPropina, addItem, removeItem, placeOrder, restarItem} = useOrder();

  return (
    <>
      <header className="bg-indigo-200 p-6">
        <h1 className="text-center text-3xl font-thin">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem 
              key={item.id} 
              item={item} 
              addItem= {addItem}
              />
            ))}
          </div>
        </div>
        
       
        <div className="border border-solid border-indigo-200 p-5 rounded-lg space-y-10">
        {order.length > 0 ? 
        (
          <>
         <OrderContents
          order= {order}
          removeItem = {removeItem}
          addItem={addItem}
          restarItem={restarItem}
         
          />

          <Propina
          setPropina = {setPropina}
          propina= {propina}
          />

          <TotalOrders
            order={order}
            propina={propina}
            placeOrder={placeOrder}
          />
         
         </>

        ):(
          <p className="text-center">La cuenta está vacía</p>
        )}
        </div>
      </main>
    </>
  );
}

export default App;
