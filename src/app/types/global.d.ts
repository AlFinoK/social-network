declare module '*.scss' {
    interface ClassNames {
        [classname: string]: string
    }
    const classNames: ClassNames
    export = classNames
}

declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'

declare module '*.svg' {
    import { SVGProps, VFC } from 'react'

    const SVG: VFC<SVGProps<SVGSVGElement>>

    export default SVG
}
