import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender'
import { Modal } from './Modal'

describe('Modal', () => {
    test('Test Modal', () => {
        componentRender(<Modal />)
        expect(screen.getByTestId('Modal')).toBeInTheDocument()
    })
})
