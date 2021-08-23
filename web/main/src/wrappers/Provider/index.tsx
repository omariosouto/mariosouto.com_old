import UIThemeProvider from '@devsoutinho/ui/src/theme/provider/UIThemeProvider';
import NextLink from 'next/link';

interface ProviderProps {
  children: React.ReactNode;
}
export default function Provider({ children }: ProviderProps): JSX.Element {
  return (
    <UIThemeProvider NextJSLinkWrapper={NextLink}>{children}</UIThemeProvider>
  );
}
