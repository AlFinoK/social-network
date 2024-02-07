import s from './Loader.module.scss'
import { classNames } from 'shared/lib/classNames'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div
            style={{ fontSize: '4rem', textAlign: 'center' }}
            className={classNames(s.Loader, {}, [className])}
        >
            Loader
        </div>
    )
}
