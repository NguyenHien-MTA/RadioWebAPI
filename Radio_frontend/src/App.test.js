import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from './App';
import Login from "./components/Login/Login"

afterEach(cleanup)
// test useTest
it('text in state is changed when button clicked', () => {
  const {getByText} = render = render(<Login />)

  expect().toBe(false);
  fireEvent.click(getByText("Login"))
  expect().toBe(true)
})
