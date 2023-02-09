import { classNames } from './classNames'

describe('classNames', () => {
    test('only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods and one false', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, hz: false },
            ['class1', 'class2']
        )).toBe(expected)
    })

    test('with mods and all true', () => {
        const expected = 'someClass class1 class2 hovered hz'
        expect(classNames(
            'someClass',
            { hovered: true, hz: true },
            ['class1', 'class2']
        )).toBe(expected)
    })

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, hz: undefined },
            ['class1', 'class2']
        )).toBe(expected)
    })
})
