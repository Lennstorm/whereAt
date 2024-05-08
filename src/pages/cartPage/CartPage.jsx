import { useEffect } from 'react'
import './cartPage.css'
import Header from '../../components/header/Header'
import FooterNav from '../../components/footerNav/FooterNav'
import Button from '../../components/button/Button';
import CartObject from '../../../src/components/cartObject/CartObject';
import CartSum from '../../components/cartSum/CartSum';

const handleBtnClick = () => {
  console.log('Skicka order!')
};

function CartPage() {
  useEffect(() => {
    document.title = 'Varukorg';
  }, []);

  return (
    <div className='cartpage__wrapper'>
      <Header title="Order" />
      <section>
        <CartObject />
        <CartSum />
      <Button text="Skicka order" onClick={handleBtnClick}/>
      </section>
      <FooterNav />
    </div>
  )
}

export default CartPage