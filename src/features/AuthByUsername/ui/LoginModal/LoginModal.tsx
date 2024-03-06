import { classNames } from 'shared/lib/classNames'
import { Modal } from 'shared/ui/Modal'
import s from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
}

export const LoginModal = ({ className }: LoginModalProps) => (
    <Modal className={classNames(s.LoginModal, {}, [className])}>
        <LoginForm />
    </Modal>
)
