import React from 'react';
import { render } from '@testing-library/react';
import Menu from '.';

test('should be render Menu', () => {
    const { getByTestId } = render(<Menu/>);

    expect(getByTestId('menu')).toBeDefined();
}); 