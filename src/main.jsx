import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App addresses={addresses}/>
  </React.StrictMode>,
)
