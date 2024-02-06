import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="wrapper">
                <div className="leftSide">
                    <Sidebar />
                </div>
                <div className="content">
                    <AppRouter />
                </div>
            </div>
        </div>
    )
}
