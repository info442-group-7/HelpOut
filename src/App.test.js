import React from 'react';
import { render } from '@testing-library/react';
import AppController from './AppController';

test('renders learn react link', () => {
  const { getByText } = render(<AppController/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
