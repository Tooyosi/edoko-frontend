import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Landing from "../pages/Landing";
import ScrollToTop from "../components/common/ScrollToTop";
import Contact from "../pages/Contact";
import OtherPagesLayout from "../Layout/OtherPages";
import TrackOrder from "../pages/Orders/Track";


const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route path="/order" render={(props) =>
          <OtherPagesLayout>
            <TrackOrder {...props} />
          </OtherPagesLayout>
        } />
        <Route path="/contact" render={(props) =>
          <OtherPagesLayout>
            <Contact {...props} />
          </OtherPagesLayout>
        } />
        <Route path="/" component={Landing} />
        <Redirect from="*" to="/" />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default Routes;
