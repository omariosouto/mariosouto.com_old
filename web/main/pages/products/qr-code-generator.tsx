import UIThemeProvider from '@devsoutinho/universalui/src/theme/provider/UIThemeProvider/web';
import HomeScreen from '@devsoutinho/universalui/src/patterns/qrcode-generator/web';

export default function Screen(): JSX.Element {
  return (
    <UIThemeProvider>
      <HomeScreen />
    </UIThemeProvider>
  );
}
