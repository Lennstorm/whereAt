import { useState, useEffect } from 'react';
import { fetchEvents } from '../../script/api';
import { useParams } from 'react-router-dom';
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
  const [ticketQuantity, setTicketQuantity] = useState(0);

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
    if (ticketQuantity > 0)
  }

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
            <div className='event__totalPrice'></div>
            <div className='event__ticketDecrease'></div>
            <div className='event__ticketQuantity'></div>
            <div className='event__ticketIncrease'></div>
          </article>
        </section>

      </section>
      <FooterNav />
    </div>
  )
}

export default EventPage