import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Input, InputTheme } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import s from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation')

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <div className={s.inner}>
                <Input
                    autoFocus
                    theme={InputTheme.PRIMARY}
                    type="username"
                    placeholder={t('логин')}
                />
                <Input
                    theme={InputTheme.PRIMARY}
                    type="password"
                    placeholder={t('пароль')}
                />

                <Button theme={ButtonTheme.OUTLINE}>{t('подтвердить')}</Button>
            </div>
        </div>
    )
}
