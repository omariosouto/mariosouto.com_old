// WIP
import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}
export default function Box({ children }: BoxProps): JSX.Element {
  return <div>{children}</div>;
}
