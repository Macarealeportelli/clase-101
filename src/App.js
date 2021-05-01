import "./App.css";
import Busqueda from "./componentes/Busqueda.js";



import { BrowserRouter,  Route, Link, Switch} from "react-router-dom";
import Home from "./componentes/Home.js";
import Contacto from "./componentes/Contacto.js";

function App() {


  

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




    {/* <div>
      <Busqueda
        valorDelInput={valorDelInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
       
      />
    
    </div> */}
   </>
   
   
   
  
  );
}

export default App;
