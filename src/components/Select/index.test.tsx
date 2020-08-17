import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '.';

test('should be render Select', () => {
    const { getByTestId } = render(
        <Select
            name="Select test"
            options={[{
                id: 2013,
                name: 'test'
            }]}
            value={"0"}
            onChange={() => {}}
        />
    );

    const input = getByTestId('input-select') as HTMLSelectElement;

    fireEvent.change(input, {target: {value: '2013'}});

    expect(input.value).toEqual('2013');
}); 