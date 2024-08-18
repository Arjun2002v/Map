import React from 'react'
import Sidbar from './Sidbar'
import Map from './Map'
import { Loader } from './Loader'

export default function Layout() {
  return (
    <div className='nav-bar'>
        <Loader/>
     <div className='App'>
       
        <Sidbar/>
        <Map/>
    </div>
    </div >
   
  )
}
