import './footerNav.css'
import { Link } from 'react-router-dom';

function FooterNav() {
  return (
    <div className="foot__Nav">
      <ul className="nav__List">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="events">
            Events
          </Link>
        </li>

        <li>
          <Link to="tickets">
            Tickets
          </Link>
        </li>        
      </ul>
    </div>
  )
}

export default FooterNav