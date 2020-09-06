import React from 'react';
import ClienteForm from './Containers/ClienteForm/ClienteForm';
import Confirmacion from './Containers/Confirmacion/ConfirmacionEnvio';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={ClienteForm} />
      <Route path='/confirmacion' component={Confirmacion} />
    </Switch>
  );
}

export default App;
