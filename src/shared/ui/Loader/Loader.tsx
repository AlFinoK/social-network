import { classNames } from 'shared/lib/classNames'
import s from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div
        style={{ fontSize: '4rem', textAlign: 'center' }}
        className={classNames(s.Loader, {}, [className])}
    >
        Loader
    </div>
)
