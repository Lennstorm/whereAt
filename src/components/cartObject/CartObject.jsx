import { useEffect, useState } from 'react'
import { fetchEvents } from '../../script/api';
import useStore from '../../script/store';
import '../cartObject/cartObject.css'

function CartObject({ eventId }) {
  const [events, setEvents] = useState([]);
  // const ticketCounts = useStore(state => state.ticketCounts);  
  const ticketQuantity = useStore(state => state.ticketCounts[eventId] || 0);
  
  const decreaseTicket = (eventId) => { 
    useStore.getState().decreaseTicketQuantity(eventId, ticketQuantity) };
  const increaseTicket = (eventId) => { 
    useStore.getState().increaseTicketQuantity(eventId, ticketQuantity)};

  useEffect(() => {
    const getEventData = async () => {
      try {
        const eventsData = await fetchEvents();
        console.log(eventsData);
        setEvents(eventsData.events);
      } catch (error) {
        console.error('Errorr fetchning event data', error);        
      }
    };
              // const foundEvent = eventsData.events.find(event => event.id === eventId);
        // setEvent(foundEvent);
        // console.log(eventId)
        // console.log(eventsData.events)
            
    getEventData();
  }, []);
    
  if (events.length === 0) {
    return <div>CartObject funkar inte!</div>;
  }

  return (
    
<div className='cart__card-wrapper'>
    {events.map(event => (
      <div key={event.id} className='cartCard'>
      <section className='cartCard__nameDateTime'>
        <h2 className='cartCard__name'>{event.name}</h2>
        <div className='cartCard__dateTime'>{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}  </div>
      </section>
      <section className='cartCard__ticketCount'>        
        <div className='cartCard__ticketDecrease' onClick={decreaseTicket}> <img src="../../../src/assets/minus_small.svg" alt="Decrease ticket quantity" /></div>        
        <div className='cartCard__ticketQuantity'>{ticketQuantity}</div>
        <div className='cartCard__ticketIncrease' onClick={increaseTicket}> <img src="../../../src/assets/plus_small.svg" alt="increase ticket quantity" /></div>
      </section>
    </div>
    ))}
</div>
  );
}

export default CartObject