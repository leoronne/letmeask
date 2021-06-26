import { Switch, BrowserRouter } from 'react-router-dom';

import { Home, NewRoom, Room, NotFoundPage } from '../pages';
import Route from './Route';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact layout="auth" component={Home} />
        <Route path="/rooms/new" exact layout="auth" component={NewRoom} />
        <Route path="/rooms/:id" layout="room" component={Room} />

        <Route path="/not-found" exact component={NotFoundPage} layout="room" />
        <Route component={NotFoundPage} layout="room" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
