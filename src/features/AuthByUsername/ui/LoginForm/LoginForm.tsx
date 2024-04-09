import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Input, InputTheme } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading'
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { getLoginUsername } from '../../model/selectors/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword'
import { loginByUsername } from '../../model/services/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import s from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
}

const inititalReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

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
        <DynamicModuleLoader reducers={inititalReducers} removeAfterUnmount>
            <div className={classNames(s.LoginForm, {}, [className])}>
                <div className={s.inner}>
                    <Text theme={TextTheme.PRIMARY} title={t('Auth')} />
                    {error && (
                        <Text theme={TextTheme.ERROR} title={t('Has error')} descr={t('Invalid login or password')} />
                    )}
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
        </DynamicModuleLoader>
    )
})
export default LoginForm
