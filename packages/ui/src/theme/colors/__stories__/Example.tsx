import UIThemeProvider from '../../provider/UIThemeProvider';
import Box from '../../../components/foundation/layout/Box';
import Text from '../../../components/foundation/Text';
import { patternColorSchemeNames } from '../../types/ThemeColors';

export const ExampleColorPatterns = (): JSX.Element => {
  return (
    <UIThemeProvider>
      <div>
        {patternColorSchemeNames.map((patternFill) => (
          <Box key={patternFill} margin="0 0 x10 0" className="border-2 p-5">
            <div>{`<Box patternFill="${patternFill}" bg={true} />`}</div>
            <Box patternFill={patternFill} bg={true}>
              <div>
                <Text patternColor="colorBase">colorBase</Text>
              </div>
              <div>
                <Text patternColor="colorContrastBase">colorContrastBase</Text>
              </div>
              <div>
                <Text patternColor="colorContrastLight">
                  colorContrastLight
                </Text>
              </div>
              <div>
                <Text patternColor="colorContrastStrong">
                  colorContrastStrong
                </Text>
              </div>
              <div>
                <Text patternColor="colorHighlight">colorHighlight</Text>
              </div>
              <div>
                <Text patternColor="colorHighlightLight">
                  colorHighlightLight
                </Text>
              </div>
              <div>
                <Text patternColor="colorHighlightStrong">
                  colorHighlightStrong
                </Text>
              </div>
            </Box>
          </Box>
        ))}
      </div>
    </UIThemeProvider>
  );
};
