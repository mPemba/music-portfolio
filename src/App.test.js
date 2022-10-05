import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sub text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Composer based in Salt Lake City./i);
  expect(linkElement).toBeInTheDocument();
});
