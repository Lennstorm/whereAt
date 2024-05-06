import { useEffect, useState } from 'react'
import { fetchEvents } from '../../api/api'
import lookingGlass from '../../assets/lookingGlass.svg'
import FooterNav from '../../components/footerNav/FooterNav'
import Header from '../../components/header/Header'
import './eventsList.css'

function EventsList() {
  useEffect(() => {
    document.title = 'Events';
  }, []);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const eventsData = await fetchEvents();
    setEvents(eventsData);
    console.log(eventsData);
  }




  const handleSearchClick = () => {
    console.log('sökning');
  };

  return (
    <div className='eventsList__Page'>
      <Header title="Events" />
      <section className='events__searchbar'>
        <img src={lookingGlass} alt="Search" onClick={handleSearchClick} />
        <input type="text" placeholder='Sök event...' />
      </section>
      <section className='events__all'>
      </section>
      <FooterNav />
    </div>
  )
}

export default EventsList