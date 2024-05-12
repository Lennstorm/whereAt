import { Link } from 'react-router-dom';
import './button.css'

function Button({ to, text }) {
  if (to) {
    return (
      <Link to={to} className='greenBtn'>
        {text}
      </Link>
    );
  }

  return (
    <button className='greenBtn'>
      {text}
    </button>
  );
}
  export default Button;