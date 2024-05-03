import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import CartPage from './pages/cartPage/CartPage';
import TicketPage from './pages/ticketPage/TicketPage'
import EventPage from './pages/eventPage/EventPage';
import EventsList from './pages/eventsList/EventsList';


function App() {


  return (
    <div className='app'>
      <Router>

        <Routes>
          <Route path="/" element={
            <HomePage />
          } />

          <Route path="/eventslist/" element={
            <EventsList />
          } />

          <Route path="/singleevent/" element={
            <EventPage />
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
