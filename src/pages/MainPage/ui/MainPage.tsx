import { useTranslation } from 'react-i18next'
import { Input, InputTheme } from 'shared/ui/Input/Input'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div style={{ color: 'var(--primary-color)' }}>
            {t('Главная')}
            <br />
            <Input
                theme={InputTheme.PRIMARY}
                type="username"
                placeholder={t('Введите логин')}
            />
        </div>
    )
}

export default MainPage
