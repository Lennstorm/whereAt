import './footerNav.css'
import { Link } from 'react-router-dom';

function FooterNav() {
  return (
    <div className="footer">
      <ul className="nav__List">
        <li>
          <Link className='footLink' to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className='footLink' to="/eventslist">
            Events
          </Link>
        </li>

        <li>
          <Link className='footLink' to="/tickets">
            Tickets
          </Link>
        </li>        
      </ul>
    </div>
  )
}

export default FooterNav