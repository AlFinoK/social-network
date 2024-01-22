import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="wrapper">
                <Navbar />
                <AppRouter />
                <button onClick={toggleTheme}>Change theme</button>
            </div>
        </div>
    )
}
