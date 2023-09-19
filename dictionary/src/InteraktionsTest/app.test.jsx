import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import reducer from '../Redux/reducer';
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

describe('App', () => {
  it('renders headline', () => {
    const store = legacy_createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    render(<Provider store={store}><App/></Provider>)
    const header = screen.getByText('Dictionary', {exact:false})
    expect(header).toBeInTheDocument()
  });
});