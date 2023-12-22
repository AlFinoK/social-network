declare module '*.scss' {
    interface ClassNames {
        [classname: string]: string
    }
    const classNames: ClassNames
    export = classNames
}
