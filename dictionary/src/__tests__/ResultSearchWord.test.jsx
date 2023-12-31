import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import ResultSearchWord from '../components/ResultSearchWord';
import word from './responseAPI.json'
import strong from './testStrong.json'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { legacy_createStore } from "redux";
import reducer from '../Redux/reducer';

// För att kolla så att Audio element renderas på sidan så tog jag data-testId då det inte fanns någon ByRole på den.
// eftersom hello inte hade antonyms så gjorde jag en mock på ordet strong med som innehåller antonyms

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
  it('should show antonyms from response',()=>{
    const store = legacy_createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
    render(<Provider store={store}><ResultSearchWord word={strong[0]}/></Provider>)
    
    expect( screen.getAllByText('strong', {exact: false})).toHaveLength(2)
    expect( screen.getByText('forcelessly', {exact: false})).toBeInTheDocument()
  })
});