




/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';
// /Users/ruth/Dropbox/Developer/apps/ps/ps/tests/frontend/frontend.test.js
// /Users/ruth/Dropbox/Developer/apps/ps/ps/src/mocks/server.js
import { server } from '../../src/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the PrioritySorter component', () => {
  render(<App />);
  // Replace the following line with actual assertions relevant to your component
  expect(screen.getByText(/some text in your component/i)).toBeInTheDocument();
});

