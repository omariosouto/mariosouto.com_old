import UIThemeProvider from '@devsoutinho/universalui/src/theme/provider/UIThemeProvider/web';
// import NextLink from 'next/link';

interface ProviderProps {
  children: React.ReactNode;
}
export default function Provider({ children }: ProviderProps): JSX.Element {
  return <UIThemeProvider>{children}</UIThemeProvider>;
}
