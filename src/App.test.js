import React from 'react'
import { render, screen, fireEvent, wait } from '@testing-library/react'
import App from './App'

import { fethShow as mockFetchShow} from './api/fetchShow'


describe('App Tests', ()=>{
    test('App renders', ()=>{
        render(<App />)
    });

    test('shows fetching data', ()=>{
        render(<App show={false}/>)
        expect(screen.findByText(/Fetching data.../i))
    });

    test('fetches show data and renders data', async ()=>{
        render(<App />);
        mockFetchShow.mockResolvedValueOnce({data: { _embedded: {
            episodes: [
                {name: 'Test 1'}, 
                {name: 'Test 2'}]
            }}});
        const dropdown = screen.getByRole('Dropdown')
        fireEvent.click(dropdown)
        await wait();

        expect(screen.queryAllByTestId('episode')).toHaveLength(2);
        
        });
})