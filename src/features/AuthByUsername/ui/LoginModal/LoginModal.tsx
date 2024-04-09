import { classNames } from 'shared/lib/classNames'
import { Modal } from 'shared/ui/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader'
import s from './LoginModal.module.scss'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
    className?: string
    onClose?: () => void
    isOpen?: boolean
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, onClose, isOpen } = props
    return (
        <Modal className={classNames(s.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}
