/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute } from 'react-router-dom';

interface RouteWrapperProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteWrapperProps> = ({ component: Component, ...rest }: RouteWrapperProps) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};

export default Route;
