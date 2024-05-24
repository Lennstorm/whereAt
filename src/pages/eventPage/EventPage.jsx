import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvents } from '../../script/api';
import useStore from '../../script/store';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import FooterNav from '../../components/footerNav/FooterNav';
import './eventPage.css';

function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const ticketQuantity = useStore(state => state.ticketCounts[eventId] || 0);
  
  useEffect(() => {
    document.title = 'Boka';
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const eventsData = await fetchEvents();
      const foundEvent = eventsData.find(event => event.id === eventId);
      setEvent(foundEvent);
      console.log(foundEvent);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const decreaseTicket = () => useStore.getState().decreaseTicketQuantity(eventId, ticketQuantity);
  const increaseTicket = () => useStore.getState().increaseTicketQuantity(eventId, ticketQuantity);
  const totalPrice = useStore.getState().calculateTotalPrice(event, ticketQuantity);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className='eventpage__wrapper'>
      <Header title="Event" />
      <section className='event__Page'>
        <h2 className='eventPage__headline'>You are about to score some tickets to</h2>

        <section className='eventpage__event'>
          <article key={event.id} className='eventPage__card'>
            <div className='eventPage__eventName'>{event.name}</div>
            <div className='eventPage__dateTime'>{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}</div>
            <div className='eventPage__eventPlace'>{`@ ${event.where}`}</div>
          </article>

          <article className='event__total'>
            <div className='event__totalPrice'>{`${totalPrice} sek`}</div>
            <div className='event__ticketDecrease' onClick={decreaseTicket}> <img src="../../../src/assets/minus.svg" alt="Decrease ticket quantity" /></div>
            <div className='event__ticketQuantity'>{ticketQuantity}</div>
            <div className='event__ticketIncrease' onClick={increaseTicket}> <img src="../../../src/assets/plus.svg" alt="increase ticket quantity" /></div>
          </article>
        </section>
        <Button to="/cart" text="Till varukorgen" />
      </section>
      <FooterNav />
    </div>
  )
}

export default EventPage;
