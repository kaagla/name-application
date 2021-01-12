import { render } from '@testing-library/react';
import Names from './Names';

const testNames = [{ name: 'name1'}, { name: 'name2'}]

describe('Names', () => {
    test('names component is not rendered with null props', () => {
        render(<Names names={null} />)
    
        const component = document.getElementById('names-component')
    
        expect(component).toBeFalsy()
    });
    
    test('render names component with empty list', () => {
        render(<Names names={[]} />)
      
        const component = document.getElementById('names-component')
    
        expect(component).toHaveTextContent('Names not found.')
    });
    
    test('render names component with content', () => {
        render(<Names names={testNames} />)
      
        const component = document.getElementById('names-component')
    
        expect(component).not.toHaveTextContent('Names not found.')
        expect(component).toHaveTextContent(testNames[0].name)
        expect(component).toHaveTextContent(testNames[1].name)
    });    
})