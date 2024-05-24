import { useEffect, useState } from 'react';
import { fetchEvents } from '../../script/api';
import useStore from '../../script/store';
import './cartObject.css';

function CartObject() { 
  const [events, setEvents] = useState([]);  
  const { decreaseTicketQuantity, increaseTicketQuantity } = useStore(); 
  const ticketCounts = useStore(state => state.ticketCounts);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const eventsData = await fetchEvents();        
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching event data', error);        
      }
    };
            
    getEventData();
  }, []);

  const decreaseTicket = (eventId) => { 
    decreaseTicketQuantity(eventId, ticketCounts[eventId] || 0);
  }; 
  
  const increaseTicket = (eventId) => { 
    increaseTicketQuantity(eventId, ticketCounts[eventId] || 0);
  }; 

  const filteredEvents = events.filter(event => ticketCounts[event.id] !== undefined && ticketCounts[event.id] > 0);

  if (filteredEvents.length === 0) {
    return <div className='cartObject__errMsg'>Inga biljetter tillagda än!</div>;
  } 
    
  return (
    <div className='cart__card-wrapper'>
      {filteredEvents.map(event => (
        <div key={event.id} className='cartCard'>
          <section className='cartCard__nameDateTime'>
            <h2 className='cartCard__name'>{event.name}</h2>
            <div className='cartCard__dateTime'>{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}</div>
          </section>
          <section className='cartCard__ticketCount'>        
            <div className='cartCard__ticketDecrease' onClick={() => decreaseTicket(event.id)}> <img src="../../../src/assets/minus_small.svg" alt="Decrease ticket quantity" /></div>        
            <div className='cartCard__ticketQuantity'>{ticketCounts[event.id]}</div>
            <div className='cartCard__ticketIncrease' onClick={() => increaseTicket(event.id)}> <img src="../../../src/assets/plus_small.svg" alt="increase ticket quantity" /></div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default CartObject;
