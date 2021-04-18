import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component }) => {

  let user = localStorage.getItem('user');

  return (
    <Route
      render={() =>
        user !== null ?
          <Component />
          :
          <Redirect to="/" />
      }
    />
  )
}
