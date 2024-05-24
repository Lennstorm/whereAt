import { useState, useEffect } from 'react';
import './ticketObject.css';

function TicketObject({ events }) {
  const [tickets, setTickets] = useState([]);

  const generateTicketValues = () => {
    const tickId = '#' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const sectionId = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const seatNr = Math.floor(Math.random() * 999) + 1;
    return { tickId, sectionId, seatNr };
  };

  useEffect(() => {
    if (events && events.length > 0) {
      const generatedTickets = events.flatMap(event => {
        return [...Array(event.ticketCount)].map(() => {
          const { tickId, sectionId, seatNr } = generateTicketValues();
          const dateParts = event.when.date.split(' ');
          const month = dateParts[1].substring(0, 3);
          const fullDate = `${dateParts[0]} ${month}`;
          return {
            tickId,
            sectionId,
            seatNr,
            eventName: event.name,
            eventWhere: event.where,
            eventDate: fullDate,
            eventFrom: event.when.from,
            eventTo: event.when.to
          };
        });
      });

      setTickets(generatedTickets);
    } 
  }, [events]);

  return (
    <article className='ticket__wrapper'>
      {tickets.map(ticket => (
        <div key={ticket.tickId} className='ticket__card'>
          <div className='ticket__what'>
            <p className='ticket__header'>WHAT</p>
            <h3 className='ticket__event-name'>{ticket.eventName}</h3>
          </div>

          <div className='ticket__where'>
            <p className='ticket__header'>WHERE</p>
            <p className='ticket__event-where'>{ticket.eventWhere}</p>
          </div>

          <div className='ticket__when'>
            <p className='ticket__header'>WHEN</p>
            <p className='ticket__event-date'>{ticket.eventDate}</p>
          </div>

          <div className='ticket__from'>
            <p className='ticket__header'>FROM</p>
            <p className='ticket__event-from'>{ticket.eventFrom}</p>
          </div>

          <div className='ticket__to'>
            <p className='ticket__header'>TO</p>
            <p className='ticket__event-to'>{ticket.eventTo}</p>
          </div>

          <div className='ticket__info'>
            <p className='ticket__header'>INFO</p>
            <p className='ticket__info-seat'>{`Section ${ticket.sectionId} - seat ${ticket.seatNr}`}</p>
          </div>

          <div className='ticket__id-bar'>
            <p className='ticket__id-code'>{ticket.tickId}</p>
            <p className='ticket__id-text'>{ticket.tickId}</p>
          </div>
        </div>
      ))}
    </article>
  );
}

export default TicketObject;
