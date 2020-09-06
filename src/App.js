import React from 'react';
import ClienteForm from './Containers/ClienteForm/ClienteForm';
import Confirmacion from './Containers/Confirmacion/ConfirmacionEnvio';
import Layout from './hoc/Layout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={ClienteForm} />
        <Route path='/confirmacion' component={Confirmacion} />
      </Switch>
    </Layout>

  );
}

export default App;
