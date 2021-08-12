import UIThemeProvider from '../../../../theme/provider/UIThemeProvider';
import Icon, { iconMapByName } from '../index';

const iconNames = Object.keys(iconMapByName) as Array<
  keyof typeof iconMapByName
>;

export const Example = (): JSX.Element => {
  return (
    <UIThemeProvider>
      <div>
        <div className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {iconNames.map((name) => {
            return (
              <div key={name} className="col-span-1 flex shadow-sm rounded-md">
                <div className="bg-red-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
                  <Icon name={name} />
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <p className="text-neutral-900">{name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </UIThemeProvider>
  );
};
