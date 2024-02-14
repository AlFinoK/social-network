import { classNames } from './classNames'

describe('classNames', () => {
    test('only with one param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional class', () => {
        const expectedRes = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expectedRes,
        )
    })
    test('with mods', () => {
        const expectedRes = 'someClass class1 class2 hovered scrollable'
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expectedRes)
    })
    test('with mods false', () => {
        const expectedRes = 'someClass class1 class2 scrollable'
        expect(
            classNames('someClass', { hovered: false, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expectedRes)
    })
    test('with mods undefined', () => {
        const expectedRes = 'someClass class1 class2 hovered'
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
            ]),
        ).toBe(expectedRes)
    })
})
