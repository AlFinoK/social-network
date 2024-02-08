import { useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import Chevron from 'shared/assets/icons/chevron.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import s from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                className={`${s.chevron} ${collapsed ? s.collapsed : ''}`}
                theme={ThemeButton.CLEAR}
                onClick={() => setCollapsed((prev) => !prev)}
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
