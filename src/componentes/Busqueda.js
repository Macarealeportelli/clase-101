import "./Buscador1.css";

const Busqueda = ({ handleSubmit, handleChange, valorDelInput }) => {
  return (
    <div className="barra-busqueda">
      
      <form onSubmit={handleSubmit}>
        <div className='buscador'>
        <input value={valorDelInput} onChange={handleChange} />
        <input type="submit" value="Buscar" />
        </div>
        <div className='filtros'>
          <label>
            <input type="checkbox" value="Envío Gratuito" /> Envío Gratis
          </label>
          <label>Ordenar por:
          <select name="buscador-orden">
            <option value="menor-mayor">Menor Precio - Mayor Precio</option>
            <option value="mayor-menor">Mayor Precio - Menor Precio</option>
          </select></label>
          <label>
          <label>Buscar en:
          <select name="buscador-ciudad">
            <option value="capital-federal">Capital Federal</option>
            <option value="buenos-aires">Bs. As</option>
            <option value="salta">Salta</option>
            <option value="cordoba">Córdoba</option>
            <option value="tucuman">Tucumán</option>
          </select></label>
            <input type="checkbox" value="oficial" /> Tienda Oficial
          </label>
        </div>
      </form>
    </div>
  );
};

export default Busqueda;
