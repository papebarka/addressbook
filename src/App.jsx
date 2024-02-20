import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddressWrapper from './components/AddressWrapper'
import './App.css'


const Title = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
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
