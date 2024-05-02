import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/homePage/HomePage'
import OrderPage from './pages/orderPage/OrderPage'
import EventsPage from './pages/eventsPage/EventsPage'
import CartPage from './pages/cartPage/CartPage'
import TicketPage from './pages/ticketPage/TicketPage'


function App() {


  return (
    <div className='app'>
      <Router>

        <Routes>
          <Route path="/" element={
            <HomePage />
          } />
          <Route path="/order/" element={
            <OrderPage />
          } />


          <Route path="/events/" element={
            <EventsPage />
          } />

          <Route path="/cart/" element={

            <CartPage />
          } />

          <Route path="/tickets/" element={

            <TicketPage />
          } />

        </Routes>
      </Router>

    </div>


  )
}

export default App
