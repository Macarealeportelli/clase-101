import "./TarjetaReview.css";

const TarjetaReview = ({ productoDetalle, descripcion }) => {
  console.log(productoDetalle)
  return (
    <article className="tarjeta-review">
      <div className="imagen-review">
        <img src={productoDetalle.thumbnail} />
      </div>
      <div className="detalle">
        <h4>{productoDetalle.title}</h4>
        <h4>Descripción del producto:</h4>
        <div className='descripcion'>{descripcion}</div>
        <h4>${productoDetalle.price}</h4>
        <p>
          Condición: {productoDetalle.condition === "new" ? "Nuevo" : "Usado"}
        </p>
        <p>Cantidad de Productos Vendidos: {productoDetalle.sold_quantity}</p>
        <p>{productoDetalle.official_store_id && "Tienda oficial"}</p>
       {/* <div > {productoDetalle.shipping.free_shipping && (<span className="material-icons">local_shipping</span>)}</div> */}
        <button>Comprar</button>
      </div>
     
    </article>
  );
};

export default TarjetaReview;
