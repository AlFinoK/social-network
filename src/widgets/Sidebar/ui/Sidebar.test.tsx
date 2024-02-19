import { fireEvent, screen } from '@testing-library/react'
// eslint-disable-next-line max-len
import { componentRender } from 'shared/lib/tests/componentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('Test sidebar', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test toggle', () => {
        componentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
