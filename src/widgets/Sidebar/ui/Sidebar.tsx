import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
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
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                // eslint-disable-next-line i18next/no-literal-string
                data-testid="sidebar-toggle"
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
