import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ResultSearchWord from '../components/ResultSearchWord';
import { legacy_createStore } from "redux";
import reducer from '../Redux/reducer';
import { Provider } from "react-redux";


describe('ResultSearchWord', () => {
  it('should inputfield', () => {
    const store = legacy_createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
      );
    render(<Provider store={store}><ResultSearchWord/></Provider>)
    it(()=>{
        
    })  
  });
});