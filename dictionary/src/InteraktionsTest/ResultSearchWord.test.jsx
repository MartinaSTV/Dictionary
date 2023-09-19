import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import ResultSearchWord from '../components/ResultSearchWord';
import { legacy_createStore } from "redux";
import reducer from '../Redux/reducer';
import { Provider } from "react-redux";
import userEvent from '@testing-library/user-event'
import word from './responseAPI.json'

describe('ResultSearchWord', () => {
  it('should show all information from', async() => {
    const store = legacy_createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
      );
    render(<Provider store={store}><ResultSearchWord word={word}/></Provider>)
    let input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument
        const user = userEvent.setup()
        const button = screen.getByRole('button')
        await user.type(input,'hello')
        await user.click(button)
        expect( await screen.findByText('hello', {exact: false})).toBeInTheDocument()
        expect(await screen.findByText('Part of Speetch', {exact: false})).toBeInTheDocument()
  });

});