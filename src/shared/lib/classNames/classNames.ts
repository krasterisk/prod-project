type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    const classes = [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([classname, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
    return classes
}
