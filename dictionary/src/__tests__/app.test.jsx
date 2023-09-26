import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import reducer from '../Redux/reducer';
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('should render headline', () => {
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

    const buttonList = screen.getByText('Your favorite words 1')
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

  it('should add to favorite List ', async () => {
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
    const buttonList = screen.getByText('Your favorite words 1')
    await user.click(buttonList )
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(3)
    await user.click(buttonFavorite)
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(4)
    await user.click(buttonFavorite)
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(5)
  });

  it('should remove word from favorite List ', async () => {
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
    const buttonList = screen.getByText('Your favorite words 1')
    await user.click(buttonList )
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(3)
    await user.click(buttonFavorite)
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(4)
    const buttonX = screen.getAllByRole('button',{name: /X/i})
    await user.click(buttonX[1])
    expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(3)
  });
  it('should change text from Dark to Light on click and change class name for darkmode',async () => {
    const store = legacy_createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    render(<Provider store={store}><App/></Provider>)
    const user = userEvent.setup()
    const buttonMode = screen.getByRole('button',{name: /Dark/i})
    await user.click(buttonMode)
    expect( await screen.findByRole('button',{name: /Light/i})).toBeInTheDocument()
    expect(await screen.findByRole('main')).toHaveClass('app-dark')
  });

});


