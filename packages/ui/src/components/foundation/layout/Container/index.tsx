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
  className: string;
  children: React.ReactNode;
}

// TODO: FullWidth - Normal
// TODO: Padded { xs: true, sm: true, md: true, lg: true, xl: true }
export default function Container(props: ContainerProps): JSX.Element {
  return <ContainerWrapper {...props} />;
}

Container.defaultProps = {
  className: '',
  children: null,
};
