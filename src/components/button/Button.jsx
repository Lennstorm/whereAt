import './button.css'

function Button({ text, onClick}) {
  return (
    <button className='greenBtn' onClick={onClick}>
        {text}
    </button>
  );
}

export default Button