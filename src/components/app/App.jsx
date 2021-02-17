import React, { useReducer } from 'react';
import reducer, { initialState } from '../../hooks/useReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const undo = () => {
    dispatch({
      type: 'UNDO'
    });
  };

  const redo = () => {
    dispatch({
      type: 'REDO'
    });
  };

  const current = ({ target }) => {
    dispatch({
      type: 'CURRENT_CHANGE', 
      payload: target.value });
  };

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input data-testid="current"
        type="color" value={state.current} onChange={current}
      />
      <div data-testid="display"
        style={{  backgroundColor: state.current, 
          width: '10rem', 
          height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
