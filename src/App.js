import "./App.css";
import Buscador from "./componentes/Buscador";
import React, { useState, useEffect } from "react";
import Tarjeta from "./componentes/Tarjeta.js";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log("hola, estoy adentro de useEffect");

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=rollers")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, []);

  console.log("estoy fuera", productos);

  return (
    <div>
      <div className="barra-busqueda">
        <Buscador />
      </div>
      <h2>Resultados de la búsqueda</h2>
      <div className="seccion-tarjetas">
       
        {productos.map((producto, i) => 
          // console.log(producto.title)
          <Tarjeta
            key={i}
            titulo={producto.title}
            precio={producto.price}
            // envio={producto.shipping}
            condicion={producto.condition}
            imagen={producto.thumbnail}
            />
          
        )}
      </div>
    </div>
  );
}

export default App;
