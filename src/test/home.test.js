import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import narrativaAPI from './mock/narrativaApi';
import store from '../redux/configureStore';
import { loadData } from '../redux/tracker/tracker';
import Home from '../pages/Home';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>,
  ),
});

describe('Home components test', () => {
  beforeEach(() => {
    store.dispatch(loadData(narrativaAPI));
  });

  test('home must contain all countries', () => {
    renderWithRedux(<Home />);
    const countries = document.getElementById('countries');
    const country = countries.childNodes[0]
      .childNodes[0].childNodes[1].childNodes[0].textContent;
    expect(countries.childNodes.length).toBe(191);
    expect(country).toBe('Afghanistan');
  });

  test('first country is afghanistan', () => {
    renderWithRedux(<Home />);
    const countries = document.getElementById('countries');
    const country = countries.childNodes[0]
      .childNodes[0].childNodes[1].childNodes[0].textContent;
    expect(country).toBe('Afghanistan');
  });

  test('adding text to input updates the country list', () => {
    const { getByPlaceholderText } = renderWithRedux(<Home />);
    fireEvent.change(getByPlaceholderText('Enter country name'), { target: { value: 'hondu' } });
    const countries = document.getElementById('countries');
    expect(countries.childNodes.length).toBe(1);
  });
});
