import { useEffect } from 'react'
import './ticketPage.css'
import FooterNav from '../../components/footerNav/FooterNav'

function TicketPage() {
  useEffect(() => {
    document.title = 'Biljetter';
  }, []);

  return (
    <div className='tickets__Page'>
      <section className='ticket__wrapper'>

      </section>
      <FooterNav />
    </div>
  )
}

export default TicketPage