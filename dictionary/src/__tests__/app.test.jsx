import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import reducer from '../Redux/reducer';
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import userEvent from '@testing-library/user-event';

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
  it('should show data from favorite word', async() => {
    const store = legacy_createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    render(<Provider store={store}><App/></Provider>)
    const user = userEvent.setup()
    let input = screen.getByRole('textbox')
    const buttonSearch = screen.getByRole('button', {name: /Search/i})

    await user.type(input, 'hello')
    await user.click(buttonSearch)
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(2)
    const buttonFavorite = screen.getByRole('button', {name: /Add word to favorites/i})
    await user.click(buttonFavorite )
    const buttonList = screen.getByText('Your favorite words')
    await user.click(buttonList )
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(3)
    expect( await screen.findByRole('button',{name: /X/i}))
    const buttonWordName = screen.getByTestId('name')
    await user.click( buttonWordName )
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(5)
    expect( screen.getAllByRole('button', {name: /Show Definitions/i}) ).toHaveLength(6)
    const buttonsDefinitions = screen.getAllByRole('button', {name: /Show Definitions/i})
    await user.click(buttonsDefinitions[3])
    expect(await screen.findByText( '"Hello!" or an equivalent greeting.', {exact:false}))
  });
});