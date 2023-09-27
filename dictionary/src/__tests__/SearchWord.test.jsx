import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import SearchWord from '../components/searchWord';
import { legacy_createStore } from "redux";
import reducer from '../Redux/reducer';
import { Provider } from "react-redux";
import userEvent from '@testing-library/user-event'
import { rest } from "msw";
import { setupServer } from "msw/node";
import word from './responseAPI.json'

 const searchWord = 'hello'
 const server = setupServer(
 
  rest.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`, (_req, res, ctx)=>{
    return res(
      ctx.json(word)
    )
  }), rest.get(`https://api.dictionaryapi.dev/api/v2/entries/en/`, (_req, res, ctx)=>{
    return res(
      ctx.status(404)
    )
  })
)
beforeAll(() => server.listen());

afterAll(() => server.close());

describe('SearchWord', () => {
    it('should show search result', async () => {
      const store = legacy_createStore(
          reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
        );
      render(<Provider store={store}><SearchWord/></Provider>)
        let input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument

        const user = userEvent.setup()
        const button = screen.getByRole('button', {name: /Search/i})

        await user.type(input,'hello')
        await user.click(button)

        expect( await screen.findAllByText('hello', {exact: false})).toHaveLength(1)
    });

    it('should show error message if empty or wrong word', async () => {
        const store = legacy_createStore(
            reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
          );
        render(<Provider store={store}><SearchWord/></Provider>)
          const user = userEvent.setup()
          const button = screen.getByRole('button', {name: /Search/i})
          
          await user.click(button)
          expect(await screen.findByText('Type a word', {exact:false})).toBeInTheDocument()
      });
  });