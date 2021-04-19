const Buscador1=({handleSubmit, handleChange, valorDelInput})=>{
   
    return(

        <div className="barra-busqueda">
        <form onSubmit={handleSubmit}>
              <input value={valorDelInput}
                      onChange={handleChange}/>
              <input type='submit' value='Buscar'/>
          </form>
        </div>
    )
}

export default Buscador1;