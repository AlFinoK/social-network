import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Link } from 'react-router-dom'
import s from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }
    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <h1 className={s.title}>{t('Произошла ошибка')}</h1>
            <Button
                className={s.btn}
                theme={ThemeButton.CLEAR}
                onClick={reloadPage}
            >
                {t('Перезагрузить страницу')}
            </Button>
            <Link to="/" className={s.btn}>
                {t('Вернуться на главную')}
            </Link>
        </div>
    )
}
