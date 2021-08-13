import React from 'react';
import styled from 'styled-components';

/*
xs (default)
sm (640px)	max-width: 640px;
md (768px)	max-width: 768px;
lg (1024px)	max-width: 1024px;
xl (1280px)	max-width: 1280px;
2xl (1536px)	max-width: 1536px;
*/
const ContainerWrapper = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: 100%;
  padding: 15px;
`;

interface ContainerProps {
  children: React.ReactNode;
}

// TODO: FullWidth - Normal
// TODO: Padded { xs: true, sm: true, md: true, lg: true, xl: true }
export default function Container(props: ContainerProps): JSX.Element {
  return <ContainerWrapper {...props} />;
}

Container.defaultProps = {
  children: (
    // <div className="bg-pink-100">
    // </div>
    <svg
      className="border-2 border-dashed border-gray-300 bg-white h-64 w-full text-gray-200"
      preserveAspectRatio="none"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <path
        vectorEffect="non-scaling-stroke"
        strokeWidth="2"
        d="M0 0l200 200M0 200L200 0"
      ></path>
    </svg>
  ),
};
