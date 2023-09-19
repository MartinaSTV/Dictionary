import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SearchWord from '../components/searchWord';
import { legacy_createStore } from "redux";
import reducer from '../Redux/reducer';
import { Provider } from "react-redux";
import userEvent from '@testing-library/user-event'

describe('SearchWord', () => {
    it('should inputfield', async () => {
      const store = legacy_createStore(
          reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
        );
      render(<Provider store={store}><SearchWord/></Provider>)
        let input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument
        const user = userEvent.setup()
        const button = screen.getByRole('button', {name: /Search/i})
        await user.type(input,'dog')
        await user.click(button)
        expect( await screen.findAllByText('Your Word: dog', {exact: false})).toHaveLength(3)
    });

    //funkar EJ?
    it('should show error message if empty or wrong word', async () => {
        const store = legacy_createStore(
            reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
          );
        render(<Provider store={store}><SearchWord/></Provider>)
          let input = screen.getByRole('textbox')
          const user = userEvent.setup()
          const button = screen.getByRole('button', {name: /Search/i})
          await user.type(input,'')
          await user.click(button)
          expect(await screen.findByText('Sorry pal, we couldn&apost find definitions for the word you were looking for.', {exact:false})).toBeInTheDocument()
      });


  });