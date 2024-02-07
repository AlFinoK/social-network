import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="wrapper">
                    <div className="leftSide">
                        <Sidebar />
                    </div>
                    <div className="content">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    )
}
