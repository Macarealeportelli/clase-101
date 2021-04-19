import "./TarjetaReview.css";

const TarjetaReview = ({ productoDetalle, idProductoDetalle }) => {
  return (
    <article className='tarjeta-review'>
      <div className="imagen-review">
        <img src={productoDetalle.thumbnail} />
      </div>
      <div className='description'>
        <h4>{productoDetalle.title}</h4>
        <p>${productoDetalle.price}</p>
        <p>Condición: {productoDetalle.condition}</p>
        <button>Comprar</button>
      </div>
    </article>
  );
};

export default TarjetaReview;
