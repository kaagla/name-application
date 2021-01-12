import { render } from '@testing-library/react';
import Amounts from './Amounts';

const testAmounts = [{ name: 'name1', amount: 12}, { name: 'name2', amount: 25}]
const testTotalAmount = {total: 36}

describe('Names', () => {
    test('amounts components is not rendered with null props', () => {
        render(<Amounts amounts={null} />)
        
        const component = document.getElementById('amounts-component')
      
        expect(component).toBe(null)
        
    });
      
    test('render amounts component with empty list', () => {
        render(<Amounts amounts={[]} />)
    
        const component = document.getElementById('amounts-component')
    
        expect(component).toHaveTextContent('Amounts not found.')
    
    });
    
    test('render amounts component with content', () => {
        render(<Amounts amounts={testAmounts} />)
    
        const component = document.getElementById('amounts-component')
    
        expect(component).not.toHaveTextContent('Amounts not found.')
    
        expect(component).toHaveTextContent(testAmounts[0].name)
        expect(component).toHaveTextContent(testAmounts[0].amount)
        expect(component).toHaveTextContent(testAmounts[1].name)
        expect(component).toHaveTextContent(testAmounts[1].amount)
        
    });
    
    test('render amounts component with content and total amount', () => {
        render(<Amounts amounts={testAmounts} totalAmount={testTotalAmount} />)
    
        const component = document.getElementById('amounts-component')
    
        expect(component).not.toHaveTextContent('Amounts not found.')
    
        expect(component).toHaveTextContent(testAmounts[0].name)
        expect(component).toHaveTextContent(testAmounts[0].amount)
        expect(component).toHaveTextContent(testAmounts[1].name)
        expect(component).toHaveTextContent(testAmounts[1].amount)
    
        expect(component).toHaveTextContent('Total')
        expect(component).toHaveTextContent(testTotalAmount.total)
        
    });
})