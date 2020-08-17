import React from 'react';
import { render } from '@testing-library/react';
import Landing from '.';

describe('Tests Landing', () => {
    it('should test when no have select value', () => {
        const { getByTestId } = render(<Landing/>);

        expect(getByTestId('empty-list')).toBeDefined();
    });
});