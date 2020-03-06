/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Zombie from '../characters/Zombie';
import Undead from '../characters/Undead';
import Character from '../characters/Character';
import RangeCharacter from '../characters/RangeCharacter';

describe('Тестим персонажей', () => {
    test('Лучник', () => {
        const bowman = new Bowman('Лучара');
        const isBowman = bowman instanceof Bowman;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Лучара', true, true];

        expect(result).toEqual(expected);
    });
    test('Мечник', () => {
        const bowman = new Swordsman('Вар');
        const isBowman = bowman instanceof Swordsman;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Вар', true, true];

        expect(result).toEqual(expected);
    });
    test('Зомби', () => {
        const bowman = new Zombie('Ходячий Мертвяк');
        const isBowman = bowman instanceof Zombie;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Ходячий Мертвяк', true, true];

        expect(result).toEqual(expected);
    });
    test('Мертвяк', () => {
        const bowman = new Undead('Мертвячий Ходяк');
        const isBowman = bowman instanceof Undead;
        const isCharacter = bowman instanceof Character;
        const result = [bowman.name, isBowman, isCharacter];
        const expected = ['Мертвячий Ходяк', true, true];

        expect(result).toEqual(expected);
    });
});

describe('Тестим дальнобойных персонажей', () => {
    test('Демон', () => {
        const demon = new Daemon('Демонюга');
        const isBowman = demon instanceof Daemon;
        const isCharacter = demon instanceof RangeCharacter;
        const result = [demon.name, isBowman, isCharacter];
        const expected = ['Демонюга', true, true];

        expect(result).toEqual(expected);
        expect(demon.setAttack(2)).toBe(90);
        demon.setStoned();
        expect(demon.setAttack(2)).toBe(85);
        expect(() => {
            demon.setAttack(-2);
        }).toThrow();
    });

    test('Маг', () => {
        const mag = new Magician('Ватный');
        const isBowman = mag instanceof Magician;
        const isCharacter = mag instanceof RangeCharacter;
        const result = [mag.name, isBowman, isCharacter];
        const expected = ['Ватный', true, true];

        expect(result).toEqual(expected);
        expect(mag.setAttack(2)).toBe(90);
        mag.setStoned();
        expect(mag.setAttack(2)).toBe(85);
        expect(() => {
            mag.setAttack(-2);
        }).toThrow();
    });
});
