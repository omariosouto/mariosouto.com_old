export const Ex = {
  test: '',
};

// import { useEffect, useState } from 'react';
// import Text, { Variant } from '../index';

// const variantsName = Object.keys(Variant);

// function useThemeFontSize() {
//   const [variantsInfo, setVariantsInfo] = useState([]);
//   useEffect(() => {
//     const allVariants = Array.from(
//       document.querySelector('#SizeExamples').querySelectorAll('p')
//     );

//     const result = allVariants.map((el) => {
//       const { xs, md } = el.classList.value
//         .split(' ')
//         .reduce((acc, currentItem) => {
//           if (currentItem.includes('text-')) {
//             let xs = acc.xs;
//             let md = acc.md;
//             if (currentItem.includes('md:')) {
//               md = currentItem.replace('text-', '').replace('md:', '');
//             } else {
//               xs = currentItem.replace('text-', '');
//             }

//             return {
//               ...acc,
//               xs,
//               md,
//             };
//           }
//           return acc;
//         }, {});

//       return {
//         xs: themeFontSize[xs].replace('rem', ''),
//         md: themeFontSize[md || xs].replace('rem', ''),
//       };
//     });
//     setVariantsInfo(result);
//   }, []);

//   return variantsInfo;
// }

// export function SizeExamples() {
//   const variantsInfo = useThemeFontSize();

//   return (
//     <div id="SizeExamples">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Variant Name
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               {'"md"'} screen size
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               {'"xs"'} screen size (default)
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {variantsName.map((variantName, index) => (
//             <tr
//               key={variantName}
//               className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
//             >
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                 <Text as="p" variant="body_2">
//                   {variantName}
//                 </Text>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 Font-size: {variantsInfo[index]?.md * 16}px |{' '}
//                 {variantsInfo[index]?.md}rem
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 Font-size: {variantsInfo[index]?.xs * 16}px |{' '}
//                 {variantsInfo[index]?.xs}rem
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
