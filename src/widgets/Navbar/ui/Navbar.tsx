import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import Home from 'shared/assets/icons/home.svg'
import About from 'shared/assets/icons/about.svg'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import Logo from 'shared/assets/icons/logo.svg'
import s from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation')

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.logo}>
                <Logo />
                <span>{t('social')}</span>
            </div>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    <Home className={s.home} />
                    {/* alt={t('Главная')} */}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    <About className={s.about} />
                    {/* alt={t('О сайте'} */}
                </AppLink>
            </div>
        </div>
    )
}
