import { useState, useEffect } from 'react'
import './cartPage.css'
import Header from '../../components/header/Header'
import FooterNav from '../../components/footerNav/FooterNav'
import Button from '../../components/button/Button';
import CartObject from '../../../src/components/cartObject/CartObject';
import CartSum from '../../components/cartSum/CartSum';
import useStore from '../../script/store';
import { useHistory } from 'react-router-dom';
import { fetchEvents } from '../../script/api';

function CartPage() {
  const [events, setEvents] = useState([]);
  const generateTicksEmptyCart = useStore(state => state.emptyCart);
  const setEventsInStore = useStore(state => state.setEvents);
  const history = useHistory();
  
  useEffect(() => {
    document.title = 'Varukorg';
    const fetchData = async () => {
      try {
        const response = await fetchEvents();
        setEvents(response.events);
        setEventsInStore(response.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, [setEventsInStore]);

  const handleOrderClick = () => {
    generateTicksEmptyCart();
    history.push('/tickets');
  };


  return (
    <div className='cartpage__wrapper'>
      <Header title="Order" />
      <section className='cartPage__objects'>
        <CartObject />
        <CartSum />
        <Button text="Skicka order" onClick={handleOrderClick}/>
      </section>
      <FooterNav />
    </div>
  )
}

export default CartPage
