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
        value: '#00FF00'
      }
    });

    const display = await screen.findByTestId('display');
        
    expect(display).toHaveStyle({
      backgroundColor: '#00FF00',
    });
  });
});
