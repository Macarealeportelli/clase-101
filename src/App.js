import "./App.css";
import Busqueda from "./componentes/Busqueda.js";
import React, { useState, useEffect } from "react";
import Resultados from "./componentes/Resultados.js";
import TarjetaReview from "./componentes/TarjetaReview.js";

import { BrowserRouter,  Route, Link, Switch} from "react-router-dom";
import Home from "./componentes/Home.js";
import Contacto from "./componentes/Contacto.js";

function App() {
  const [productos, setProductos] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [tipoDeVista, setTipoDeVista] = useState("busqueda");
  const [productoDetalle, setProductoDetalle] = useState({});
  const [id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
 

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorDelInput}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, [busqueda]);

  useEffect(() => {
    if (id) {
      fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProductoDetalle(data);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDescripcion(data.plain_text);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valorDelInput);
    setBusqueda(valorDelInput);
  };

  const handleClickDetalle = (id) => {
    console.log(id);
    setTipoDeVista("detalle");
    setId(id);
  };

  

  return (
   <> 
    <BrowserRouter>
    <nav>
      <p><Link to="/">Home</Link></p>
        <p><Link to="/busqueda">Busqueda</Link></p>
        <p><Link to="/contacto">Contacto</Link></p>
      </nav>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/busqueda" component={Busqueda}/>
      <Route exact path="/contacto" component={Contacto}/>
    </Switch>
    </BrowserRouter>




    <div>
      <Busqueda
        valorDelInput={valorDelInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
       
      />
      <h2>Resultados de la búsqueda</h2>
      {tipoDeVista === "busqueda" && (
        <Resultados
          productos={productos}
          handleClickDetalle={handleClickDetalle}
        />
      )}
      {tipoDeVista === "detalle" && (
        <TarjetaReview
          productoDetalle={productoDetalle}
          descripcion={descripcion}
        />
      )}
    </div>
   </>
   
   
   
  
  );
}

export default App;
