import './styles/index.scss'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageLazy } from './pages/MainPage.lazy'
import { AboutPageLazy } from './pages/AboutPage.lazy'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    const bool = true
    return (
        <div
            className={classNames(
                'app',
                { hovered: true, selectable: true, red: true },
                [theme, 'cls'],
            )}>
            <Link to={'/'}>main</Link>
            <br />
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy />} />
                    <Route path={'/about'} element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    )
}
