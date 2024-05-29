import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import CartPage from './pages/cartPage/CartPage';
import TicketPage from './pages/ticketPage/TicketPage'
import EventPage from './pages/eventPage/EventPage';
import EventsList from './pages/eventsList/EventsList';
import { fetchEvents } from './script/api';

function App() {

  const [events, setEvents] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchEvents();
        setEvents(response.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

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

          <Route path="/singleevent/:eventId" element={
            <EventPage event={event} />} />

          <Route path="/cart/" element={
            <CartPage events={events} />
          } />

          <Route path="/tickets/" element={
            <TicketPage events={events} />
          } />

        </Routes>
      </Router>

    </div>


  )
}

export default App
