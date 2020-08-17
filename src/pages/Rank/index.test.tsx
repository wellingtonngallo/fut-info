import React from 'react';
import { render } from '@testing-library/react';
import RankTable from '.';
import { Standing } from '../Landing';

const mockData: Standing = {
    standings: [{
        table: [{
            team: {
                id: 1,
                name: 'Corinthians'
            }
        }]
    }]
}

describe('Tests RankTable', () => {
    it('should render RankTable', () => {
        const { getByTestId } = render(<RankTable rank={mockData}/>);

        expect(getByTestId('rank-table')).toBeDefined();
    });
});