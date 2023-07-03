import React from 'react';
import { render } from '@testing-library/react';
import { BasicCountdown } from './countdown.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicCountdown />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
