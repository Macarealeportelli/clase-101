import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Busqueda from "./componentes/Busqueda.js";
import Home from "./componentes/Home.js";
import Contacto from "./componentes/Contacto.js";

// import "./App.css";

const BarraNavegacion = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 10px;

  background-color: lightsteelblue;
  color: black;
`;

const StyledLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <BarraNavegacion>
          <p>
            <StyledLink to="/">Home</StyledLink>
          </p>
          <p>
            <StyledLink to="/busqueda">Busqueda</StyledLink>
          </p>
          <p>
            <StyledLink to="/contacto">Contacto</StyledLink>
          </p>
        </BarraNavegacion>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/busqueda" component={Busqueda} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
