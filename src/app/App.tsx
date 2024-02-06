import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="wrapper">
                <Navbar />
                <AppRouter />
                <ThemeSwitcher />
            </div>
        </div>
    )
}
