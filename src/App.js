import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Caracter from './Componentes/Caracter/Caracter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={ () => <h1>Welcome</h1> } />


          <Route path="/:caracter/:colorTexto/:colorFondo" render={ (routeProps) => <Caracter {...routeProps}></Caracter>  } />

          <Caracter></Caracter>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
