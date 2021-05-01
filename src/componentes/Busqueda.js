// import "./Buscador1.css";
import React, { useState, useEffect } from "react";
import Resultados from "./Resultados.js";
import TarjetaReview from "./TarjetaReview.js";
import styled from "styled-components";

const BarraBusqueda = styled.div`
  background-color: lightseagreen;
  
  padding: 10px;

  display: flex;
  justify-content: center;
  
`;

const Buscador = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const Filtros = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const FiltroInterno = styled(Filtros)`
  margin: 10px;
  font-size: 12px;
`;

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
      <BarraBusqueda className="barra-busqueda">
        <form onSubmit={handleSubmit}>
          <Buscador className="buscador">
            <input value={valorDelInput} onChange={handleChange} />
            <input type="submit" value="Buscar" />
          </Buscador>
          <Filtros className="filtros">
            <FiltroInterno>
              <input type="checkbox" value="Envío Gratuito" /> Envío Gratis
            </FiltroInterno>
            <FiltroInterno>
              <p>Ordenar por: </p>
              <select name="buscador-orden">
                <option value="menor-mayor">Menor Precio - Mayor Precio</option>
                <option value="mayor-menor">Mayor Precio - Menor Precio</option>
              </select>
            </FiltroInterno>
            <FiltroInterno>
              <FiltroInterno>
              <p>Buscar en: </p>
                <select name="buscador-ciudad">
                  <option value="capital-federal">Capital Federal</option>
                  <option value="buenos-aires">Bs. As</option>
                  <option value="salta">Salta</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="tucuman">Tucumán</option>
                </select>
              </FiltroInterno>
              <input type="checkbox" value="oficial" /> Tienda Oficial
            </FiltroInterno>
          </Filtros>
        </form>
      </BarraBusqueda>

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
