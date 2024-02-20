import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const Title = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const AddressWrapper = ({ addresses }) => {
  return(
    <div>
      {addresses.map(item => <Address key={item.id} name={item.name} phone={item.phone} address={item.address}/>)}
    </div>
  )
}

const Address = ({name, phone, address}) => {
  return(
    <div>
      <h2>{name}</h2>
      <p>
        T: {phone}<br/>
        A: {address}
      </p>
    </div>
  )
}

const App = () => {
  const name = "Tech User"

  const addresses = [
    {
      id: 1,
      name: "Ousmane Coulibaly",
      phone: "+223 85 74 02 02",
      address: "Bamako"
    },

    {
      id: 2,
      name: "John Chris",
      phone: "+1 745 20 74 2024",
      address: "NYC"
    },

    {
      id: 3,
      name: "Adam Maarouf",
      phone: "+33 857 402 17 02",
      address: "Paris"
    },

    {
      id: 4,
      name: "Jack Spencer",
      phone: "+1 474 558 57 40 202",
      address: "NJ"
    }
  ]

  return(

    <div>
      <Title name="Address Book"/>
      <p>Hello {name}</p>
      <AddressWrapper addresses={addresses}/>
    </div>
  )

}

export default App
