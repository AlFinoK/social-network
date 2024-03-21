import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Input, InputTheme } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { loginByUsername } from '../../model/services/loginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import s from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <div className={s.inner}>
                <Text theme={TextTheme.PRIMARY} title={t('Auth')} />
                {error && <Text theme={TextTheme.ERROR} title={t('Has error')} descr={error} />}
                <Input
                    autofocus
                    theme={InputTheme.PRIMARY}
                    type="username"
                    placeholder={t('login')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    theme={InputTheme.PRIMARY}
                    type="password"
                    placeholder={t('password')}
                    onChange={onChangePassword}
                    value={password}
                />

                <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE}>
                    {t('continue')}
                </Button>
            </div>
        </div>
    )
})
