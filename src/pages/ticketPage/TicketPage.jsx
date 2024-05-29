import { useEffect } from 'react';
import './ticketPage.css';
import TicketObject from '../../components/ticketObject/TicketObject';
import FooterNav from '../../components/footerNav/FooterNav';
import useTicketStore from '../../script/ticketStore';

function TicketPage() {
  const eventTickets = useTicketStore(state => state.eventTickets);

  useEffect(() => {
    document.title = 'Biljetter';
    console.log('Biljetter i TicketPage:', eventTickets); // Felsökning
  }, [eventTickets]);

  return (
    <>
      <div className='tickets__Page'>
        <TicketObject eventTickets={eventTickets} />
      </div>
      <FooterNav />
    </>
  );
}

export default TicketPage;
