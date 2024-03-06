import { classNames } from 'shared/lib/classNames'
import {
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { Portal } from 'shared/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
import s from './Modal.module.scss'

const ANIMATION_DELAY = 150

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme()

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler],
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <Portal>
            <div
                data-testid="Modal"
                className={classNames(s.Modal, mods, [className, theme])}
            >
                <div onClick={closeHandler} className={s.overlay}>
                    <div onClick={onContentClick} className={s.content}>
                        {children}
                        <div onClick={onClose} className={s.close}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0
                             1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}
