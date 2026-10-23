import './App.css'
import { Card } from './components/Card'
import { ChaiCard } from './components/ChaiCard'
import { ChaiList } from './components/ChaiList'
import { Counter } from './components/Counter'
import { OrderForm } from './components/OrderForm'
import type { Chai } from './types/types'

const menu: Chai[] = [
  {id: 1, name: "Ginger", price: 25},
  {id: 1, name: "Masala", price: 30},
  {id: 3, name: "Adrak", price: 35}
]

function App() {
  

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard
          name={"Headphone"}
          price={5000}
          isSpecial={true}
        />
        <ChaiCard
          name={"iPhone"}
          price={80000}
          isSpecial={true}
        />
      </div>

      <div>
        <Counter/>
      </div>

      <div>
        <ChaiList items={menu}/>
      </div>

      <div>
        <OrderForm onSubmit={(order)=> {
          console.log(`Placed ${order.name} - ${order.cups}`)
        }}/>
      </div>

      <div>
        <Card
          title={"React with TypeScript"}
          footer={<button>Order Now</button>}
        />
      </div>
    </>
  )
}

export default App
