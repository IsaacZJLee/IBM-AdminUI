import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Components
import AdminHeader from './components/AdminHeader';

// Content
import Login from './content/Login';
import LandingPage from './content/LandingPage';
import OrganisationsPage from './content/OrganisationsPage';
import ManageOrganisationsPage from './content/ManageOrganisationsPage';

class App extends Component {
  render() {
    const pathName = this.props.location.pathname;

    return (
      <>
        <AdminHeader pathName={pathName} />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/organisations" component={OrganisationsPage} />
            <Route exact path="/organisations/manage/:id" component={ManageOrganisationsPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default withRouter(App);
