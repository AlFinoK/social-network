import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div style={{ color: 'var(--primary-color)' }}>
            {t('Главная')}
            <Counter />
        </div>
    )
}

export default MainPage
