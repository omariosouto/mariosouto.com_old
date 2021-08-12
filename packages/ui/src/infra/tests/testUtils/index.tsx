/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import UIThemeProvider from '../../../theme/provider/UIThemeProvider';

const AllTheProviders = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => <UIThemeProvider {...props}>{children}</UIThemeProvider>;

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: any, options = { providerProps: {} }) => {
  const Provider = (props: any) => (
    <AllTheProviders {...props} {...options.providerProps} />
  );

  return render(ui, { wrapper: Provider, ...options });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
