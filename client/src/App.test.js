import React from 'react';
import {render, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Header shows up', () => {
  const {getByTestId} = render(<App/>)
  const headerShows = getByTestId(/header/i)
  expect(headerShows).toBeVisible()
})
