import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { type FC } from 'react'
import s from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary_link_theme',
    INVERTED = 'inverted_link_theme',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link
            to={to}
            className={classNames(s.appLink, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
