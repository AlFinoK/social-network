import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, ...otherProps
    }: ButtonProps = props;
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={classNames(s.Button, { [s[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
