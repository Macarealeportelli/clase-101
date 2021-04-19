import "./TarjetaReview.css";

const TarjetaReview = ({ producto, idProductoDetalle }) => {
  return (
    <article className='tarjeta-review'>
      <div className="imagen-review">
        <img src={producto.thumbnail} />
      </div>
      <div className='description'>
        <h4>{producto.title}</h4>
        <p>${producto.price}</p>
        <p>Condición: {producto.condition}</p>
        <button>Comprar</button>
      </div>
    </article>
  );
};

export default TarjetaReview;
