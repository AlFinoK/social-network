//  Record это тип который представляет собой объект, у которого ключи (в данном случае) имеют тип string, а значения имеют тип boolean или string.

type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ')
}