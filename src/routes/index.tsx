import { Switch } from 'react-router-dom';

import { Home, NewRoom } from '../pages';
import Route from './Route';

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact layout="auth" component={Home} />
        <Route path="/rooms/new" layout="auth" component={NewRoom} />
      </Switch>
    </>
  );
}

export default Routes;
