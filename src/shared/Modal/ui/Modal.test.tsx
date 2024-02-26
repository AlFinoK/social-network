import { screen } from '@testing-library/react'
// eslint-disable-next-line max-len
import { componentRender } from 'shared/lib/tests/componentRender'
import { Modal } from './Modal'

describe('Modal', () => {
    test('Test Modal', () => {
        componentRender(<Modal />)
        expect(screen.getByTestId('Modal')).toBeInTheDocument()
    })
})
