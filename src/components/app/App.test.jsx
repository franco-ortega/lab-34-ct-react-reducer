import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('changes the color', async() => {
    render(<App />);

    const current = screen.getByTestId('current');
    
    fireEvent.change(current, {
      target: {
        value: '#FF0000'
      }
    });

    const display = await screen.findByTestId('display');
        
    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
    });
  });
});


// const before = screen.getByTestId('before');
// const after = screen.getByTestId('after');

// fireEvent.change(before, {
//   target: {
//     value: '#00FF00'
//   }
// });


// fireEvent.change(after, {
//   target: {
//     value: '#0000FF'
//   }
// });

// before: '#00FF00',
// after: '#FF0000'