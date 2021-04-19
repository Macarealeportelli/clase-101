import "./Tarjeta.css";

const Tarjeta = ({ producto, handleClickDetalle, idProductoDetalle }) => {

  const handleClick = ()=>{
    handleClickDetalle(id)
  }

  return (
    <article className='tarjeta-principal' idProductoDetalle={producto.id}>
      <div className="imagen">
        <img src={producto.thumbnail} />
      </div>
      <h4>{producto.title}</h4>
      <button
       onClick={handleClick}
      >
        Ver Más
      </button>
    </article>
  );
};

export default Tarjeta;

