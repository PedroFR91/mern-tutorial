function Card(props) {
  return (
    <div className='mini-card' style={{ cursor: 'pointer' }}>
      <img src={props.img} height='80%' alt='' />
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
