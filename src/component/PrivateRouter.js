import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//限定路由組件要用到再拉
const PrivateRoute = ({ component: Component, value, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      value
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

// export default PrivateRoute;
const mapStateToProps = state => ({ value: state.checklogin.value });
export default connect(mapStateToProps)(PrivateRoute);