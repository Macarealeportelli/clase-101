import "./Buscador1.css";
import React, { useState, useEffect } from "react";
import Resultados from "./Resultados.js";
import TarjetaReview from "./TarjetaReview.js";

const Busqueda = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [tipoDeVista, setTipoDeVista] = useState("busqueda");
  const [productos, setProductos] = useState([]);
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

  const handleClickDetalle = (id) => {
    console.log(id);
    setTipoDeVista("detalle");
    setId(id);
  };

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valorDelInput);
    setBusqueda(valorDelInput);
  };

  return (
    <>
      <div className="barra-busqueda">
        <form onSubmit={handleSubmit}>
          <div className="buscador">
            <input value={valorDelInput} onChange={handleChange} />
            <input type="submit" value="Buscar" />
          </div>
          <div className="filtros">
            <label>
              <input type="checkbox" value="Envío Gratuito" /> Envío Gratis
            </label>
            <label>
              Ordenar por:
              <select name="buscador-orden">
                <option value="menor-mayor">Menor Precio - Mayor Precio</option>
                <option value="mayor-menor">Mayor Precio - Menor Precio</option>
              </select>
            </label>
            <label>
              <label>
                Buscar en:
                <select name="buscador-ciudad">
                  <option value="capital-federal">Capital Federal</option>
                  <option value="buenos-aires">Bs. As</option>
                  <option value="salta">Salta</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="tucuman">Tucumán</option>
                </select>
              </label>
              <input type="checkbox" value="oficial" /> Tienda Oficial
            </label>
          </div>
        </form>
      </div>

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
    </>
  );
};

export default Busqueda;
