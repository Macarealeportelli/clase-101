import Tarjeta from "./Tarjeta.js";


const Resultados = ({ productos, handleClickDetalle}) => {
  return (
    <section className="resultados">
      {productos.map((producto) => (
        // console.log(producto.title)
        <Tarjeta producto={producto} key={producto.id} handleClickDetalle={handleClickDetalle} 
      />

       
      ))}
    </section>
  );
};


export default Resultados;