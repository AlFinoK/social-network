// import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'

// interface AboutPageProps {
//     className?: string
// }

const AboutPage = () => {
    const { t } = useTranslation()

    return <div style={{ color: 'var(--primary-color)' }}>{t('О сайте')}</div>
}

export default AboutPage
