/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('should render content correctly', () => {
  const appContent = renderer.create(<App />).toJSON();

  expect(appContent).toMatchSnapshot();
});

it('should increment counter', () => {
  const { getByText, getByTestId } = render(<App />);

  const counterValue = getByTestId('counterValue');
  console.log(counterValue);
  expect(counterValue.props.children).toEqual(0);
  fireEvent.press(getByText('Increment'));
  expect(counterValue.props.children).toEqual(1);
});

it('should decrement counter', () => {
  const { getByText, getByTestId } = render(<App />);

  const counterValue = getByTestId('counterValue');
  console.log(counterValue);
  expect(counterValue.props.children).toEqual(0);
  fireEvent.press(getByText('Decrement'));
  expect(counterValue.props.children).toEqual(-1);
});

it('should reset counter', () => {
  const { getByText, getByTestId } = render(<App />);

  const counterValue = getByTestId('counterValue');
  console.log(counterValue);
  expect(counterValue.props.children).toEqual(0);
  fireEvent.press(getByText('Increment'));
  expect(counterValue.props.children).toEqual(1);
  fireEvent.press(getByText('Reset'));
  expect(counterValue.props.children).toEqual(0);
});
