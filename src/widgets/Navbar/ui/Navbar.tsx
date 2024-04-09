/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import Logo from 'shared/assets/icons/logo.svg'
import { useCallback, useEffect, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { Link } from 'react-router-dom'
import { RoutePath, routeConfig } from 'shared/config/routeConfig'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import s from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const disptach = useDispatch()
    const authData = useSelector(getUserAuthData)
    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev)
    }

    const onLogout = useCallback(() => {
        disptach(userActions.logout())
    }, [disptach])
    if (authData) {
        return (
            <div className={classNames(s.navbar, {}, [className])}>
                <Link to={RoutePath.main} className={s.logo}>
                    <Logo />
                    <span>social</span>
                </Link>
                <Button className={s.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </div>
        )
    }
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <Link to={RoutePath.main} className={s.logo}>
                <Logo />
                <span>social</span>
            </Link>
            <div className={s.login}>
                <Button className={s.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onToggleModal}>
                    {t('Зарегистрироваться')}
                </Button>
                {isAuthModal && <LoginModal className={s.modal} isOpen={isAuthModal} onClose={onToggleModal} />}
            </div>
        </div>
    )
}
