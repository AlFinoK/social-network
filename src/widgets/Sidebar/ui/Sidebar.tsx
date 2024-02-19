import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import Chevron from 'shared/assets/icons/chevron.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Home from 'shared/assets/icons/home.svg'
import About from 'shared/assets/icons/about.svg'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
// import { t } from 'i18next'
import { RoutePath } from 'shared/config/routeConfig'
import { useTranslation } from 'react-i18next'
import s from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={s.links}>
                <div className={s.link}>
                    <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.main}>
                        <Home className={s.home} />
                        {t('Главная')}
                    </AppLink>
                </div>
                <div className={s.link}>
                    <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.about}>
                        <About className={s.about} />
                        {t('О сайте')}
                    </AppLink>
                </div>

            </div>
            <Button
                data-testid="sidebar-toggle"
                className={`${s.chevron} ${collapsed ? s.collapsed : ''}`}
                theme={ButtonTheme.CLEAR}
                onClick={() => setCollapsed((prev) => !prev)}
            >
                <Chevron />
            </Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
