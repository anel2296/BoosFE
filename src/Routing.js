import React from "react";
import { Home } from "./Home";
import { AboutUs } from "./AboutUs";
import { Menu } from "./Menu";
import { Order } from "./Order";
import { Receipt } from "./Receipt";
import { Login } from "./Login";
import { Changes } from "./Changes";
import { InfoEdit } from "./InfoEdit";
import { MenuEdit } from "./MenuEdit";
import { SchedEdit } from "./SchedEdit";
import { AdminOrder } from "./AdminOrder";
import App from "./containers/App_container";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/menu" component={Menu} />
          <Route path="/ordering" component={Order} />
          <Route path="/receipt" component={Receipt} />
          <Route path="/login" component={Login} />
          <Route path="/changes" component={Changes} />
          <Route path="/infoEdit" component={InfoEdit} />
          <Route path="/menuEdit" component={MenuEdit} />
          <Route path="/schedEdit" component={SchedEdit} />
          <Route path="/adminOrder" component={AdminOrder} />
          <Route path="/app" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
