import "./Tarjeta.css";

const Tarjeta = ({ producto, handleClickDetalle, id }) => {
  const handleClick = () => {
    handleClickDetalle(id);
  };

  return (
    <article className="tarjeta-principal" key={producto.id} id={producto.id}>
      <div className="imagen">
        <img src={producto.thumbnail} />
      </div>
     
      <div className="info-producto">
        <h4>{producto.title}</h4>
        <div className="envio">
        <h4>${producto.price}</h4>
        {producto.shipping.free_shipping && (<span className="material-icons">local_shipping</span>)}
      </div>
      </div>
      <button onClick={handleClick}> Ver Más </button>
    </article>
  );
};

export default Tarjeta;
