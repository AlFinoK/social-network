import { useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import Chevron from 'shared/assets/icons/chevron.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    function onToggle() {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                className={`${s.chevron} ${
                    collapsed === true ? s.collapsed : ''
                }`}
                theme={ThemeButton.CLEAR}
                onClick={onToggle}
            >
                <Chevron />
            </Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
