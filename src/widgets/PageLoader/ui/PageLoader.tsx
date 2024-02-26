import { classNames } from 'shared/lib/classNames'
import { Loader } from 'shared/ui/Loader'
import s from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(s.PageLoader, {}, [className])}>
        <Loader />
    </div>
)
