import { classNames } from 'shared/lib/classNames'
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
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

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    }

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    } 

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        console.log('CLEAR')
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen])

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation()
    }
    return (
        <div className={classNames(s.Modal, mods, [className])}>
            <div onClick={closeHandler} className={s.overlay}>
                <div onClick={onContentClick} className={s.content}>
                    {children}
                </div>
                <div onClick={onClose} className={s.close}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
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
    )
}
