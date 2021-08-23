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
            padding="x4"
            backgroundColor={themeName === 'Dark' && 'neutral900'}
            color={themeName === 'Dark' && 'white'}
          >
            <h1>[{themeName}]</h1>
            {Object.keys(devsoutinhoPallete.light).map((colorDeckName) => (
              <Box key={colorDeckName}>
                {colorDeckName}
                {colorDeckName === 'white' ? (
                  <div key={`devsoutinho_${themeName}__`}>
                    <Box
                      display="inline-block"
                      backgroundColor={colorDeckName}
                      width="x6"
                      height="x6"
                      margin="x0 x4 x0 x0"
                      border="x1 solid gray"
                    />
                    <Text color={colorDeckName}>{colorDeckName}</Text>
                  </div>
                ) : (
                  colorSetKeys.map((colorSetKey) => (
                    <div key={`devsoutinho_${themeName}${colorSetKey}`}>
                      <Box
                        display="inline-block"
                        backgroundColor={colorDeckName + colorSetKey}
                        width="x6"
                        height="x6"
                        margin="x0 x4 x0 x0"
                        border={`x1 solid ${colorDeckName + colorSetKey}`}
                      />
                      <Text color={colorDeckName + colorSetKey}>
                        {colorDeckName + colorSetKey}
                      </Text>
                    </div>
                  ))
                )}
              </Box>
            ))}
          </GridCell>
        ))}
      </Grid>
    </UIThemeProvider>
  );
}
