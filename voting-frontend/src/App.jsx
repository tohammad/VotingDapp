import { useState } from 'react'
import './App.css'
import { Dummy } from './Dummy'
import Web3Provider from './context/web3Provider'

function App() {

  return (
    <>
      <div>
        <h1>Voting DApp</h1>
        <p>Welcome to the Voting Decentralized Application (DApp)!</p>
        <p>This DApp allows users to create and participate in voting polls.</p>
        <p>Connect your wallet to get started.</p>
        <Web3Provider value={{}}>
           <Dummy />
        </Web3Provider>
       
      </div>
    </>
  )
}

export default App
