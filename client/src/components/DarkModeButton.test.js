import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DarkModeButton from './DarkModeButton'

test('Dark Mode button shows up', () => {
    const {getByText} = render(<DarkModeButton/>)
    const buttonShows = getByText(/darkmode/i)
    expect(buttonShows).toBeVisible()
  })

test('Button clicks', () => {
    const {getByTestId} = render(<DarkModeButton/>)
    // const buttonClicks = getByTestId(/darkmode/i)
    fireEvent.click(getByTestId(/button/i))
})