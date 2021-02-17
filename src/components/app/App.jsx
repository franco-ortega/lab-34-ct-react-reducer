import React, { useReducer } from 'react';
import reducer, { initialState } from '../../hooks/useReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button data-testid="before" onClick={() => dispatch({
        type: 'UNDO'
      })}>undo</button>
      <button data-testid="after" onClick={() => dispatch({
        type: 'REDO'
      })}>redo</button>
      <input
        data-testid="current"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch({
          type: 'CURRENT_CHANGE', 
          payload: target.value })
        }
      />
      <div data-testid="display"
        style={{ 
          backgroundColor: state.current, 
          width: '10rem', 
          height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
