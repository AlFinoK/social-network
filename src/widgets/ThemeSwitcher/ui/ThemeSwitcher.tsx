import { useTheme, Theme } from 'app/providers/ThemeProvider'
import s from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme()

    return (
        <>
            <Button
                theme={ThemeButton.CLEAR}
                className={classNames(s.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
            >
                {theme === Theme.DARK ? (
                    <DarkIcon style={{ width: '2rem', height: '2rem' }} />
                ) : (
                    <LightIcon style={{ width: '2rem', height: '2rem' }} />
                )}
            </Button>
        </>
    )
}
