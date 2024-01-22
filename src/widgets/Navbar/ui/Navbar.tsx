import s from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
                О нас
            </AppLink>
        </div>
    )
}
