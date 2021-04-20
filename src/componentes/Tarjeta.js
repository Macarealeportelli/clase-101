import "./Tarjeta.css";

const Tarjeta = ({ producto, handleClickDetalle,  id }) => {

const handleClick=(id)=>{
  handleClickDetalle(id)
}

  return (
    <article className='tarjeta-principal' key={producto.id} id={producto.id}>
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

