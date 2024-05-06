import { useEffect } from 'react'
import './cartPage.css'
import Header from '../../components/header/Header'
import FooterNav from '../../components/footerNav/FooterNav'

function CartPage() {
  useEffect(() => {
    document.title = 'Varukorg';
  }, []);

  return (
    <div className='cartpage__wrapper'>
      <Header title="Order" />
      <section>
      
      </section>
      <FooterNav />
    </div>
  )
}

export default CartPage