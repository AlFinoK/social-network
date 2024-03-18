import { classNames } from 'shared/lib/classNames'
import { Modal } from 'shared/ui/Modal'
import { useState } from 'react'
import s from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    onClose?: () => void
    isOpen?: boolean
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, onClose, isOpen } = props
    return (
        <Modal
            className={classNames(s.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    )
}
