/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode } from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute } from 'react-router-dom';

import { Auth } from '../layouts';

interface RouteWrapperProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  layout: 'auth' | 'room';
}

interface LayoutProps {
  children: ReactNode;
}

function Route({ component: Component, layout, ...rest }: RouteWrapperProps) {
  const Layout = ({ children }: LayoutProps) => {
    return layout === 'auth' ? <Auth>{children}</Auth> : <></>;
  };

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
}

export default Route;
