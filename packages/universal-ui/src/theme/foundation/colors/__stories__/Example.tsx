import UIThemeProvider from '../../../provider/UIThemeProvider/web';
import { colorSetKeys } from '../themeType';
import { devsoutinhoPallete } from '../palletes/devsoutinho';

export function ExampleDevSoutinhoPallete(): JSX.Element {
  return (
    <UIThemeProvider>
      <div>
        {['Light', 'Dark'].map((themeName) => (
          <div
            key={`devsoutinho_${themeName}`}
            className={themeName === 'Dark' && 'dark'}
            color={themeName === 'Dark' && 'white'}
          >
            <h1>[{themeName}]</h1>
            {Object.keys(devsoutinhoPallete.light).map((colorDeckName) => (
              <div key={colorDeckName}>
                {colorDeckName}
                {colorDeckName === 'white' ? (
                  <div key={`devsoutinho_${themeName}__`}>
                    <div
                    />
                    <p>{colorDeckName}</p>
                  </div>
                ) : (
                  colorSetKeys.map((colorSetKey) => (
                    <div key={`devsoutinho_${themeName}${colorSetKey}`}>
                      <div
                      />
                      <p color={colorDeckName + colorSetKey}>
                        {colorDeckName + colorSetKey}
                      </p>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </UIThemeProvider>
  );
}
