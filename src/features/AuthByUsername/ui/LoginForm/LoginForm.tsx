import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import s from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            {t('some text')}
        </div>
    )
}
