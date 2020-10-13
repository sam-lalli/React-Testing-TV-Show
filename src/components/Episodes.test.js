import React from 'react'
import { render, screen} from '@testing-library/react'
import Episodes from './Episodes'

describe('Episodes Tests', () =>{
    test('Episodes renders', () =>{
        render(<Episodes episodes={[]} />)
    });

    test('Episodes rerender with more items added', ()=>{
        const { rerender } = render(<Episodes episodes={[]} />)
        const newEpisodes = [{name: "test 1"}, {name: 'test 2'}]

        expect(screen.queryAllByTestId('episode')).toHaveLength(0);

        rerender(<Episodes episodes={newEpisodes} />);
        
        expect(screen.queryAllByTestId('episode')).toHaveLength(2);

    })
})
