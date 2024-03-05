/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import Logo from 'shared/assets/icons/logo.svg'
import { Modal } from 'shared/ui/Modal'
import { useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import s from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation')
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev)
    }

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.logo}>
                <Logo />
                <span>{t('social')}</span>
            </div>

            <div className={s.login}>
                <Button
                    className={s.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    // eslint-disable-next-line react/jsx-closing-bracket-location
                    onClick={onToggleModal}>
                    {t('Зарегистрироваться')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    <span>lorem ipsum dolor...</span>
                </Modal>
            </div>
        </div>
    )
}
