import FooterNav from '../../components/footerNav/FooterNav'
import Header from '../../components/header/Header'
import './eventPage.css'

function EventPage() {
  return (
    <div>
      <Header title="Event" />
      <section className='event_Page'></section>
      <FooterNav />
    </div>
  )
}

export default EventPage