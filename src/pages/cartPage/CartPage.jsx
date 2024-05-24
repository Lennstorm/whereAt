import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cartPage.css';
import Header from '../../components/header/Header';
import FooterNav from '../../components/footerNav/FooterNav';
import Button from '../../components/button/Button';
import CartObject from '../../../src/components/cartObject/CartObject';
import CartSum from '../../components/cartSum/CartSum';
import useStore from '../../script/store';
import { fetchEventTickets } from '../../script/tickets';

function CartPage() {
  const [events, setEvents] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const generateTicksEmptyCart = useStore(state => state.emptyCart);
  const ticketCounts = useStore(state => state.ticketCounts);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Varukorg';
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);

  const fetchData = async () => {
    try {
      const response = await fetchEventTickets(ticketCounts);
      setEvents(response);
      setDataFetched(true);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleOrderClick = () => {
    generateTicksEmptyCart();
    navigate('/tickets');
  };

  return (
    <div className='cartpage__wrapper'>
      <Header title="Order" />
      <section className='cartPage__objects'>
        <CartObject events={events} />
        <CartSum />
        <Button text="Skicka order" onClick={handleOrderClick}/>
      </section>
      <FooterNav />
    </div>
  );
}

export default CartPage;
