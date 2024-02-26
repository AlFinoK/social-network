import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useState } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { Modal } from 'shared/Modal'
import { AppRouter } from './providers/router'

export const App = () => {
    const { theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    const onClickModal = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <button onClick={onClickModal}>..</button>
                <Modal isOpen={isOpen} onClose={onClickModal}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquid reprehenderit cumque beatae facilis veniam quisquam
                    blanditiis, autem doloremque doloribus, eligendi dolores
                    sint consectetur voluptatem neque odio distinctio
                    necessitatibus reiciendis itaque!
                </Modal>
                <div className="content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
