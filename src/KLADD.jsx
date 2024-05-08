import { useState, useEffect } from 'react';
import { fetchEvents } from '../../script/api';
import { useParams } from 'react-router-dom';
import useStore from '../../path/to/store'; // Importera din Zustand 
import Button from '../../components/button/Button';
import FooterNav from '../../components/footerNav/FooterNav';
import Header from '../../components/header/Header';
import './eventPage.css';

function EventPage() {
  const { eventId } = useParams();

  useEffect(() => {
    document.title = 'Boka';
    fetchData();
  }, []);

  const [event, setEvent] = useState(null);
  const ticketQuantity = useStore(state => state.ticketCounts[eventId] || 0); // Läs biljettantalet från Zustand


  const fetchData = async () => {
    try {
      const eventsData = await fetchEvents();
      const foundEvent = eventsData.events.find(event => event.id === eventId);
      setEvent(foundEvent);
      console.log(foundEvent);
      console.log(event);
    } catch (error) {
      console.error('error fetching events:', error)
    }
  };

  const decreaseTicketQuantity = () => {
    if (ticketQuantity > 0) {
      useStore.getState().addToCart(eventId, ticketQuantity - 1); // Uppdatera biljettantalet med Zustand
    }
  };

  const increaseTicketQuantity = () => {
    useStore.getState().addToCart(eventId, ticketQuantity + 1); // Uppdatera biljettantalet med Zustand
  }

  const totalPrice = event ? event.price * ticketQuantity : 0;

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className='eventpage__wrapper'>
      <Header title="Event" />
      <section className='event__Page'>
        <h2>You are about to score some tickets to</h2>

        <section className='eventpage__event'>
          <article key={event.id} className='eventPage__card'>
            <div className='eventPage__eventName'>{event.name}</div>
            <div className='eventPage__dateTime'>{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}  </div>
            <div className='eventPage__eventPlace'>{event.where}</div>
          </article>

          <article className='event__total'>
            <div className='event__totalPrice'>{totalPrice}</div>
            <div className='event__ticketDecrease' onClick={decreaseTicketQuantity}> <img src="../../../src/assets/minus.svg" alt="Decrease ticket quantity" /></div>
            <div className='event__ticketQuantity'>{ticketQuantity}</div>
            <div className='event__ticketIncrease' onClick={increaseTicketQuantity}> <img src="../../../src/assets/plus.svg" alt="increase ticket quantity" /></div>
          </article>
        </section>

      </section>
      <FooterNav />
    </div>
  )
}

// export default EventPage;
