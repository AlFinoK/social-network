import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import s from './User.module.scss'

interface UserProps {
    className?: string
}

export const User = ({ className }: UserProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(s.User, {}, [className])}>
            {/* Your component content goes here */}
        </div>
    )
}
