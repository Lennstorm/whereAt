import { useEffect } from 'react'
import FooterNav from '../../components/footerNav/FooterNav'
import Header from '../../components/header/Header'
import './eventPage.css'

function EventPage() {
  useEffect(() => {
    document.title = 'Boka';
  }, []);
  return (
    <div className='eventpage__wrapper'>
      <Header title="Event" />
      <section className='event_Page'></section>
      <FooterNav />
    </div>
  )
}

export default EventPage