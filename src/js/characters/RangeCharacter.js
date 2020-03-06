import Character from './Character';

export default class RangeCharacter extends Character {
    stoned = false;

    setAttack(rangeToTarget) {
        if (rangeToTarget <= 0) {
            throw new Error('Attack fail');   
        }
        let attack = this.attack - (rangeToTarget - 1) * (this.attack / 10);
        if (this.stoned) {
            attack -= Math.log2(rangeToTarget) * 5;
        }
        return attack;
        
    }

    // getAttack() {
    //     return this.attack;
    // }

    setStoned() {
        this.stoned = true;
    }

    getStoned() {
        return this.stoned;
    }
}
