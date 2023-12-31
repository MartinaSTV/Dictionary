import { describe, expect, it } from "vitest";
import WordList from "../components/WordList";
import { render, screen } from "@testing-library/react";
import { legacy_createStore } from "redux";
import reducer from "../Redux/reducer";
import { Provider } from "react-redux";
import userEvent from '@testing-library/user-event'

// att kunna ta bort och lägga till ord i listans testas i app test då den går igenom hela sida.
describe('Word List component renders',() =>{
    it('should display favorite word headline',()=>{
        const store = legacy_createStore(
            reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
          );
        render(<Provider store={store}><WordList/></Provider>)
        expect(screen.getByText('Your favorite words'))
    })
    it('should display No word added yet if empty', async()=>{
        const store = legacy_createStore(
            reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
          );
        render(<Provider store={store}><WordList/></Provider>)

        const user = userEvent.setup()
        let button = screen.getByText('Your favorite words')

        await user.click(button)
        expect( screen.queryByText('No word added yet')).toBeInTheDocument()
    })
})