import 'shared/config/i18n/intex'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import ErrorBoundary from 'app/providers/ErrorBoundary'
import { App } from './app/App'
import 'app/styles/index.scss'

const root = document.getElementById('root')

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    root,
)
