import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('Card', () => {
  it('should render the default card without crashing', () => {
    render(<Card />);
    
    const defaultCard = screen.getByTestId('card-default');
    expect(defaultCard).toBeInTheDocument();
  });
});
