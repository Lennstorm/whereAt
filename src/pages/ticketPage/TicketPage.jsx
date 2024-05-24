import { useEffect } from 'react'
import './ticketPage.css'
import TicketObject from '../../components/ticketObject/TicketObject';
import FooterNav from '../../components/footerNav/FooterNav'
import useStore from '../../script/store.js';

function TicketPage() {
  const events = useStore(state => state.events);
  const ticketCounts = useStore(state => state.ticketCounts);

  useEffect(() => {
    document.title = 'Biljetter';
  }, []);

  console.log(events);

  return (
    <div className='tickets__Page'>
      <section className='ticket__wrapper'>
        <TicketObject events={events} ticketCounts={ticketCounts}/>
      </section>
      <FooterNav />
    </div>
  )
}

export default TicketPage