import Character from './Character';

export default class RangeCharacter extends Character {
    setAttack(rangeToTarget) {
        if (rangeToTarget > 0) {
            const attack = this.attack - (rangeToTarget - 1) * (this.attack / 10);
            return attack;
        }
        throw new Error('Attack fail');
    }

    // getAttack() {
    //     return this.attack;
    // }

    setStoned(rangeToTarget) {
        let attack = this.setAttack(rangeToTarget);
        attack -= Math.log2(rangeToTarget) * 5;
        return attack;
    }

    // getStoned() {

    // }
}
