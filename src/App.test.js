import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  render(<App />);
  const headline = screen.getByText(/Michael Sayer/i);
  expect(headline).toBeInTheDocument();
});

test('renders main image with alt text', () => {
  render(<App />);
  const image = screen.getByAltText(/me/i);
  expect(image).toBeInTheDocument();
});

test('renders secondary image with alt text', () => {
  render(<App />);
  const image = screen.getByAltText(/new machines/i);
  expect(image).toBeInTheDocument();
});

test('renders link to twitter', () => {
  render(<App />);
  const link = screen.getByAltText(/twitter/i);
  expect(link).toBeInTheDocument();
});

test('renders link to linkedin', () => {
  render(<App />);
  const link = screen.getByAltText(/linkedin/i);
  expect(link).toBeInTheDocument();
});
