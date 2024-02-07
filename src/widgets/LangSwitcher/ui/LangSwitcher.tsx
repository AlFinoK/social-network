import { useTranslation } from 'react-i18next'
import s from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import ChangeLanguage from 'shared/assets/icons/change-language.svg'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { theme } = useTheme()
    const { t, i18n } = useTranslation()

    function toggleLanguage() {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={classNames(s.LangSwitcher, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={`${s.button} ${
                    theme === Theme.DARK ? s.dark : s.light
                }`}
                onClick={toggleLanguage}
            >
                <ChangeLanguage />
            </Button>
        </div>
    )
}
