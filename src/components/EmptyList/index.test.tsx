import React from 'react';
import { render } from '@testing-library/react';
import EmptyList from '.';

test('should be render EmptyList', () => {
    const { baseElement } = render(
        <EmptyList/>
    );

    expect(baseElement.textContent).toEqual('Utilize o filtro acima para selecionar a competição desejada.');
 
}); 