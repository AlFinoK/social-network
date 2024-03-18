import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div style={{ color: 'var(--primary-color)' }}>
            {t('Главная')}
            <br />
        </div>
    )
}

export default MainPage
