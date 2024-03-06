import { type InputHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import s from './Input.module.scss'

export enum InputTheme {
    PRIMARY = 'primary',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    theme?: InputTheme
    type?: string
    placeholder?: string
}

export const Input: FC<InputProps> = (props) => {
    const { className, theme, type, placeholder, ...otherProps }: InputProps =
        props
    return (
        <input
            className={classNames(s.Input, { [s[theme]]: true }, [className])}
            type={type}
            placeholder={placeholder}
            {...otherProps}
        />
    )
}
