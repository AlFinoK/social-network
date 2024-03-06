import { render, screen } from '@testing-library/react'
import { Input, InputTheme } from './Input'

describe('Input', () => {
    test('Test render', () => {
        render(<Input>TEST</Input>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('Test primary theme', () => {
        render(<Input theme={InputTheme.PRIMARY}>TEST</Input>)
        expect(screen.getByText('TEST')).toHaveClass('primary')
    })
})
