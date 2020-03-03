import RangeCharacter from './RangeCharacter';

export default class Magician extends RangeCharacter {
    constructor(name) {
        super(name);
        this.type = 'magician';
        this.attack = 100;
        this.protection = 25;
    }
}
