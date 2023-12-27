import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib'

export const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>main</Link>
      <br />
      <Link to={'/about'}>about</Link>
      <AppRouter />
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}
