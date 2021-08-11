import React, { useEffect } from 'react';
import { useState } from 'react';
import UIThemeProvider from '../../../../theme/provider/UIThemeProvider';
import { TypographyVariants } from '../../../../theme/types/ThemeTypography';
import Text from '../index';

const typographyVariants = Object.keys(TypographyVariants) as Array<
  keyof typeof TypographyVariants
>;

interface TextCSSValues {
  fontSize: string;
  fontWeight: string;
}
export default function Example(): JSX.Element {
  const [textCSSValues, setTextCSSValues] = useState<TextCSSValues[]>([]);
  useEffect(() => {
    const data = Array.from(document.querySelectorAll('#TextExample p')).map(
      (el) => ({
        fontSize: getComputedStyle(el).fontSize,
        fontWeight: getComputedStyle(el).fontWeight,
      })
    );
    setTextCSSValues(data);
  }, []);

  return (
    <UIThemeProvider>
      <div id="TextExample">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Variant Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current screen size
              </th>
            </tr>
          </thead>
          <tbody>
            {typographyVariants.map((variantName, index) => (
              <tr
                key={variantName}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Text as="p" variant={variantName}>
                    {variantName}
                  </Text>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Font-size: {textCSSValues[index]?.fontSize} <br />
                  Font-weight: {textCSSValues[index]?.fontWeight} <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UIThemeProvider>
  );
}
