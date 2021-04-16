import "./Tarjeta.css";

const TarjetaReview= ({ titulo, condicion, precio, imagen }) => {
  return (
    <article>
      <div className='imagen'><img src={imagen} /></div>
      <h4>{titulo}</h4>
      <p>${precio}</p>
      <p>Condición: {condicion}</p>
    </article>
  );
};

export default TarjetaReview;
