import UIThemeProvider from '../../../provider/UIThemeProvider';
import { colorSetKeys } from '../../../types/ThemeColors';
import { devsoutinhoPallete } from '../palletes/devsoutinho';
import Grid, { GridCell } from '../../../../components/foundation/layout/Grid';
import Box from '../../../../components/foundation/layout/Box';
import Text from '../../../../components/foundation/Text';

export function ExampleDevSoutinhoPallete(): JSX.Element {
  return (
    <UIThemeProvider>
      <Grid
        as="section"
        gridColumns={2}
        gridGap="x5"
        minRowHeight={{ xs: 'x80', sm: 'x36' }}
      >
        {['Light', 'Dark'].map((themeName) => (
          <GridCell
            key={`devsoutinho_${themeName}`}
            className={themeName === 'Dark' && 'dark'}
          >
            <h1>[{themeName}]</h1>
            {Object.keys(devsoutinhoPallete.light).map((colorDeckName) => (
              <Box key={colorDeckName}>
                {colorDeckName}
                {colorSetKeys.map((colorSetKey) => (
                  <div key={`devsoutinho_${themeName}${colorSetKey}`}>
                    <Box
                      display="inline-block"
                      backgroundColor={colorDeckName + colorSetKey}
                      width="x6"
                      height="x6"
                      margin="x0 x4 x0 x0"
                    />
                    <Text color={colorDeckName + colorSetKey}>
                      {colorDeckName + colorSetKey}
                    </Text>
                  </div>
                ))}
              </Box>
            ))}
          </GridCell>
        ))}
      </Grid>
    </UIThemeProvider>
  );
}
