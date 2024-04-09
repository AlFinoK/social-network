import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { AppRouter } from './providers/router'

export const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
