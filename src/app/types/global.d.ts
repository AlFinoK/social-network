declare module '*.scss' {
    type ClassNames = Record<string, string>
    const classNames: ClassNames
    export = classNames
}

declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'

declare module '*.svg' {
    import { type SVGProps, type VFC } from 'react'

    const SVG: VFC<SVGProps<SVGSVGElement>>

    export default SVG
}

declare const __IS_DEV__: boolean
