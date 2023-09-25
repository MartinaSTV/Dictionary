import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi} from 'vitest';
import ResultSearchWord from '../components/ResultSearchWord';
import word from './responseAPI.json'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { legacy_createStore } from "redux";
import reducer from '../Redux/reducer';

// För att kolla så att Audio element renderas på sidan så tog jag data-testId då det inte fanns någon ByRole på den.

console.log(word)
describe('ResultSearchWord', () => {
  it('should show all information from API response', async() => {
    const store = legacy_createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    render(<Provider store={store}><ResultSearchWord word={word[0]}/></Provider>)
        expect( screen.getByText('hello', {exact: false})).toBeInTheDocument()
        expect( screen.getByText('CC BY-SA 3.0', {exact: false})).toBeInTheDocument()
        expect( screen.getByText('https://creativecommons.org/licenses/by-sa/3.0')).toBeInTheDocument()
        expect( screen.getByText('hə', {exact: false})).toBeInTheDocument()
        expect( screen.getAllByText('Part of Speech:', {exact: false})).toHaveLength(3)
        expect( screen.getAllByRole("button" , {name: /Show Definitions/i})).toHaveLength(3)
        expect( screen.getAllByRole("button" , {name: /Show Synonyms/i})).toHaveLength(3)
        expect(screen.getAllByTestId("audio")).toHaveLength(2)
     
        const user = userEvent.setup()
        const buttonDef = screen.getAllByRole("button", {name: /Show Definitions/i})
        await user.click(buttonDef[0])
        expect(await screen.findByText( 'used as a greeting or to begin a phone conversation.', {exact:false}))
        expect(await screen.findByText('hello there, Katie!', {exact:false}))

     
     
  });

 /*  it('should show antonyms from response', async() => {
    const store = legacy_createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    render(<Provider store={store}><ResultSearchWord word={word[0]}/></Provider>)
        expect( screen.getByText('strong', {exact: false})).toBeInTheDocument()
        expect( await screen.findAllByText('forceless')).toHaveLength(2)
  }); */

/*   it('should recive props', async() => {
    const store = legacy_createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    const word = vi.fn()
    render(<Provider store={store}><ResultSearchWord word={word[0]}/></Provider>)
  }); */

});