import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import narrativaAPI from './mock/narrativaApi';
import store from '../redux/configureStore';
import { loadData } from '../redux/tracker/tracker';
import App from '../App';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>,
  ),
});

describe('Details component page test', () => {
  beforeEach(() => {
    store.dispatch(loadData(narrativaAPI));
  });

  test('Details should display only the info of the selected country', () => {
    const { getByText, getByTestId } = renderWithRedux(<App />);
    fireEvent.click(getByText('Guatemala'));
    expect(getByTestId('todayConfirmed').textContent).toBe('19');
  });

  test('country cities must be displayed', () => {
    const { getByText, getByTestId } = renderWithRedux(<App />);
    fireEvent.click(getByTestId('home'));
    fireEvent.click(getByText('Argentina'));
    expect(getByTestId('cities').childNodes.length).toBe(24);
  });
});
