import "./App.css";
import Buscador1 from "./componentes/Buscador1.js";
import React, { useState, useEffect } from "react";
import Resultados from "./componentes/Resultados.js";
import TarjetaReview from "./componentes/TarjetaReview.js";

function App() {
  const [productos, setProductos] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [tipoDeVista, setTipoDeVista] = useState("busqueda");
  const [productoDetalle, setProductoDetalle] = useState({});
  const [id, setId] = useState("");
 

  useEffect(() => {
   

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorDelInput}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, [busqueda]);

  
 useEffect(()=>{
 if (id){
  fetch(`https://api.mercadolibre.com/items/${id}`)
   .then(res=>res.json())
   .then((data)=>{
     setProductoDetalle(data)
   })
  }
  }, [id])

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valorDelInput);
    setBusqueda(valorDelInput);
  };

 const handleClickDetalle=(id)=>{
   console.log(id)
   setTipoDeVista('detalle')
 }

  return (
    <div>
      <Buscador1
        valorDelInput={valorDelInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Resultados de la búsqueda</h2>
      {tipoDeVista === "busqueda" && (
        <Resultados
          productos={productos}  handleClickDetalle={handleClickDetalle}
        />
      )}
     {tipoDeVista === 'detalle' && 
     <TarjetaReview productoDetalle={productoDetalle} />}
    </div>
  );
}

export default App;
