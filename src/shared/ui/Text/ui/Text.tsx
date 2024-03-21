import { classNames } from 'shared/lib/classNames'
import s from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    SUCCESS = 'success',
}

interface TextProps {
    className?: string
    title?: string
    descr?: string
    theme: TextTheme
}

export const Text = (props: TextProps) => {
    const { className, title, descr, theme = TextTheme.PRIMARY } = props
    return (
        <div className={classNames(s.Text, { [s[theme]]: true }, [className])}>
            {title && <h3 className={s.title}>{title}</h3>}
            {descr && <p className={s.descr}>{descr}</p>}
        </div>
    )
}
