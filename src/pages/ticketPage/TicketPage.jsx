import { useEffect } from 'react'
import './ticketPage.css'
import TicketObject from '../../components/ticketObject/TicketObject';
import FooterNav from '../../components/footerNav/FooterNav'

function TicketPage( {events, generateTicksEmptyCart }) {
  useEffect(() => {
    document.title = 'Biljetter';
  }, []);

  console.log(events);

  return (
    <div className='tickets__Page'>
      <section className='ticket__wrapper'>
        <TicketObject events={events} generateTicksEmptyCart={generateTicksEmptyCart}/>
      </section>
      <FooterNav />
    </div>
  )
}

export default TicketPage