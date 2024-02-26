import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
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

        </div>
    )
}
