import { useEffect, useState } from 'react';
import { fetchEvents } from '../../script/api';
import { Link } from 'react-router-dom';
import lookingGlass from '../../assets/lookingGlass.svg';
import FooterNav from '../../components/footerNav/FooterNav';
import Header from '../../components/header/Header';
import './eventsList.css';
import Button from '../../components/button/Button';

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Events';
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const eventsData = await fetchEvents();
      if (Array.isArray(eventsData)) {
        setEvents(eventsData);
      } else {
        console.error('Events data is not in the expected format', eventsData);
        setEvents([]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchClick = () => {
    console.log('sökning');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='eventsList__Page'>
      <Header title="Events" />

      <section className='events__searchbar'>
        <img src={lookingGlass} alt="Search" onClick={handleSearchClick} />
        <input type="text" placeholder='Sök event...' />
      </section>

      <section className='events__all'>
        {events.length === 0 ? (
          <div>Inga evenemang tillgängliga</div>
        ) : (
          events.map(event => {
            const dateParts = event.when.date.split(' ');
            const monthAbbr = dateParts[1].toUpperCase().substr(0, 3);
            return (
              <Link to={`/singleevent/${event.id}`} key={event.id} className='event-link'>
                <article className='event__card'>
                  <div className='event__card-date'>
                    <span className='event__date-day'>{dateParts[0]}</span>
                    <span className='event__date-month'>{monthAbbr}</span>
                  </div>
                  <div className='event__info-name'>{event.name}</div>
                  <div className='event__info-where'>{event.where}</div>
                  <div className='event__info-time'>{`${event.when.from} - ${event.when.to}`}</div>
                  <div className='event__card-price'>{`${event.price} sek`}</div>
                  <hr className="horizontal-line" />
                </article>
              </Link>
            );
          })
        )}
      </section>
      <Button to="/cart" text="Till varukorgen" />
      <FooterNav />
    </div>
  );
}

export default EventsList;
