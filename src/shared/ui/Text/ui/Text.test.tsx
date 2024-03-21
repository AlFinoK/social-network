import { render, screen } from '@testing-library/react'
import { Text, TextTheme } from './Text'

describe('Text', () => {
    test('Test render', () => {
        render(<Text theme={TextTheme.PRIMARY} />)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Test error theme', () => {
        render(<Text theme={TextTheme.ERROR} title="title" descr="descr" />)
        expect(screen.getByText('TEST')).toHaveClass('error')
    })

    test('Test succes theme', () => {
        render(<Text theme={TextTheme.SUCCESS} title="title" descr="descr" />)
        expect(screen.getByText('TEST')).toHaveClass('succes')
    })
})
