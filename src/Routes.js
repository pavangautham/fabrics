import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Wash from './Components/wash/Wash';
import Profile from './Components/profile/Profile';
import Orders from './Components/orders/Orders';
import Payment from './Components/payment/Payment';
import Offers from './Components/offers/Offers';
import Feedback from './Components/feedback/Feedback';
import Tnc from './Components/tnc/tnc';
import Privacy from './Components/privacy/Privacy';

const Routes = ({ match }) => {
    console.log(match)
    return (
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/wash`} />
            <Route path={`${match.url}wash`} component={Wash} />
            <Route path={`${match.url}profile`} component={Profile} />
            <Route path={`${match.url}orders`} component={Orders} />
            <Route path={`${match.url}payment`} component={Payment} />
            <Route path={`${match.url}offers`} component={Offers} />
            <Route path={`${match.url}feedback`} component={Feedback} />
            <Route path={`${match.url}tnc`} component={Tnc} />
            <Route path={`${match.url}privacy`} component={Privacy} />
        </Switch>
    );
};

export default Routes;