import Tarjeta from "./Tarjeta.js";


const Resultados = ({ productos, handleClickDetalle }) => {
  return (
    <section className="resultados">
      {productos.map((producto, i) => (
        // console.log(producto.title)
        <Tarjeta producto={producto} 
        handleClickDetalle={handleClickDetalle}/>

       
      ))}
    </section>
  );
};


export default Resultados;