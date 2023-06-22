import React from 'react';
import { render } from '@testing-library/react';
import { BasicParagraph } from './paragraph.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicParagraph />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
