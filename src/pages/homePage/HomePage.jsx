import FooterNav from '../../components/footerNav/FooterNav'
import './homePage.css'


function HomePage() {
  return (

    <div className='home'>
      <section>
        <img src="/src/assets/logo.svg" alt="Logo" />
        <h1 className='title'>Where It's @</h1>
        <h2 className='underTitle'>Ticketing made easy</h2>

      </section>
      <FooterNav />
      {/* <div className='footer'>
      </div> */}
    </div>

  )
}

export default HomePage