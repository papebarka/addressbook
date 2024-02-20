import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddressWrapper from './components/AddressWrapper'
import AddressForm from './components/AddressForm'
import './App.css'


const Title = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}


const App = (props) => {
  const name = "Tech User"

  const [addresses, setAddresses] = useState(props.addresses)
  const [newAddress, setNewAddress] = useState({ id: addresses.length + 1, name: '', phone: '', address: ''})

  const handleChange = (event) => {
    const {name, value} = event.target
    setNewAddress({...newAddress, [name]: value})
    console.log(newAddress)
  }

  const addAddress = (event) => {
    event.preventDefault()
    console.log(newAddress)
    setAddresses([...addresses, newAddress])
    console.log({...addresses})
    console.log(addresses)
    setNewAddress({ id: addresses.length + 1, name: '', phone: '', address: ''})
  }

  return(

    <div>
      <Title name="Address Book"/>
      <p>Hello {name}</p>
      <AddressWrapper addresses={addresses}/>
      <AddressForm action={addAddress} change={handleChange} fields={newAddress} />
    </div>
  )

}

export default App
