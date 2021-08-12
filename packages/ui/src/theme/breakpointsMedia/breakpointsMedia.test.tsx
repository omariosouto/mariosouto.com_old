import React from 'react';
import styled from 'styled-components';
import { screen, render } from '../../infra/tests/testUtils';

test('to be or not be', () => {
  expect(true).toBe(true);
});

test('component', () => {
  const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary.main.color};
  `;
  const Component = () => (
    <div data-testid="test">
      <Title>Test</Title>
    </div>
  );
  render(<Component />);
  expect(screen.getAllByTestId('test')).toMatchSnapshot();
});
