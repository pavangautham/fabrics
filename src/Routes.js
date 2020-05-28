import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Wash from './Wash';

const Routes = ({ match }) => {
    console.log(match)
    return (
        <div>
            <Switch>
                {/* <Redirect exact from={`${match.url}`} to={`${match.url}wash`} /> */}
                <Route path={`${match.url}wash`} component={Wash} />
            </Switch>
        </div>
    );
};

export default Routes;