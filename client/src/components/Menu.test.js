import { render, waitFor, act } from '@testing-library/react';
import axios from 'axios'
import Menu from './Menu';
import userEvent from '@testing-library/user-event'

jest.mock('axios')

describe('Menu', () => {
    
    test('render search result', async () => {
        
        const result = { name: 'Name1', amount: 22 }
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: result })
        )
        
        act(() => {
            render(<Menu content={null} handleContent={jest.fn()} />)
        })
    
        act(() => {
            userEvent.click(document.getElementById('search-button'))
        })
    
        const component = document.getElementById('menu-component')
        
        await waitFor(() => {
            expect(component).toHaveTextContent(result.name)
            expect(component).toHaveTextContent(result.amount)
        })
    
    });

    test('render search result when name not found', async () => {
 
        axios.get.mockImplementationOnce(() =>
            Promise.reject(),
        );
        
        act(() => {
            render(<Menu content={null} handleContent={jest.fn()} />)
        })

        act(() => {
            userEvent.type(document.getElementById('search-input'), 'test-name')
        })
    
        act(() => {
            userEvent.click(document.getElementById('search-button'))
        })
        
        const component = document.getElementById('menu-component')
        
        await waitFor(() => {
            const name = document.getElementById('search-input').value
            expect(component).toHaveTextContent(`Name ${name} not found.`)
        })
    
    });
})