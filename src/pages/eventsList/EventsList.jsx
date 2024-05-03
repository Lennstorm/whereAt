import FooterNav from '../../components/footerNav/FooterNav'
import Header from '../../components/header/Header'
import './eventsList.css'

function EventsList() {
  return (
    <div className='eventsList__Page'>
      <Header title="Events" />
      <section className='events__all'>
        <p>Lasse-Stefanz</p>
        <p>Pelle Trubadur</p>
        <p>Kajsas Kör</p>
        <p>Klubb Untz</p>
        
      </section>
      <FooterNav />

      

    </div>
  )
}

export default EventsList