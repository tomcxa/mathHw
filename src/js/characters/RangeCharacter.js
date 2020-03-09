import Character from './Character';

export default class RangeCharacter extends Character {
    stoned = false;
    rangeAttack = 0;

    setAttack(rangeToTarget) {
        if (rangeToTarget <= 0) {
            throw new Error('Attack fail');   
        }
        this.rangeAttack = this.attack - (rangeToTarget - 1) * (this.attack / 10);
        if (this.stoned) {
            this.rangeAttack -= Math.log2(rangeToTarget) * 5;
        }        
    }

    getAttack() {
        return this.rangeAttack;
    }

    setStoned() {
        this.stoned = this.stoned ? false : true;
    }

    getStoned() {
        return this.stoned;
    }
}
