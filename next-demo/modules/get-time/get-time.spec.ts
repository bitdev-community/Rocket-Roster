import { getTime } from './get-time';

it('renders with the correct text', () => {
  expect(getTime()).toBe('hello world');
});
