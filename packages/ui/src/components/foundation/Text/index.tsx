import React from 'react';

interface TextProps {
  children: React.ReactNode;
}
export default function Text({ children }: TextProps): JSX.Element {
  return <span>{children}</span>;
}
