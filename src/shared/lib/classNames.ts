type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
  const classes = [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
  console.log(classes)
  return classes
}
