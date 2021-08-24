import React, { createContext } from 'react';

const contextInitialValues = {
  NextJSLinkWrapper: (props: {
    href?: string;
    passHref?: boolean;
    children?: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    forwardedRef?: React.Ref<any>;
  }) => (console.error(props), (<div>Not implemented right</div>)),
};
const GlobalContext = createContext(contextInitialValues);

export const useGlobalContext = (): typeof contextInitialValues =>
  React.useContext(GlobalContext);

interface GlobalProviderProps {
  NextJSLinkWrapper: React.ComponentType;
  children: React.ReactNode;
}
export default function GlobalProvider({
  children,
  NextJSLinkWrapper,
}: GlobalProviderProps): JSX.Element {
  return (
    <GlobalContext.Provider
      value={{ NextJSLinkWrapper: NextJSLinkWrapper as () => JSX.Element }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
