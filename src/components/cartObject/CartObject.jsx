import '../cartObject/cartObject.css'

function CartObject({ event, quantity}) {
  return (
    <div className='Cartcard'>
      <h2>{event.name}</h2>
      <div className='eventPage__dateTime'>{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}  </div>
    </div>
  )
}

export default CartObject