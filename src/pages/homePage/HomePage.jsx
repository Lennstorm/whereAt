import { useEffect } from 'react';
import FooterNav from '../../components/footerNav/FooterNav'
import './homePage.css'


function HomePage() {
  useEffect(() => {
    document.title = `Where it's @t`;
  }, []);

  return (

    <div className='home'>
      
      <section className=''>
        <img src="/src/assets/logo.svg" alt="Logo" />
        <h1 className='title'>Where It's @</h1>
        <h2 className='underTitle'>Ticketing made easy</h2>

      </section>
      
      <FooterNav />
      
      
    </div>
    

  )
}

export default HomePage