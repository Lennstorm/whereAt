import { useEffect, useState } from 'react';
import { fetchEvents } from '../../script/api';
import useStore from '../../script/store';
import './cartSum.css';

function CartSum() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    const calculateTotalPrice = (event, ticketQuantity) => {
      return event ? event.price * ticketQuantity : 0;
    };

    const updateTotalPrice = () => {
      let sum = 0;
      events.forEach(event => {
        const ticketQuantity = ticketCounts[event.id] || 0;
        sum += calculateTotalPrice(event, ticketQuantity);
      });
      setTotalPrice(sum);
    };

    if (events.length > 0) {
      updateTotalPrice();
      console.log(totalPrice);
    }
  }, [ticketCounts, events]);

  return (
    <div className='cartSum__total'>
      <h3 className='cartSum__text'>Totalt värde på order</h3>
      <section className='cartSum__sum'>{`${totalPrice} sek`}</section>
    </div>
  );
}

export default CartSum;
