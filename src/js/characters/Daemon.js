import RangeCharacter from './RangeCharacter';

export default class Daemon extends RangeCharacter {
    constructor(name) {
        super(name);
        this.type = 'daemon';
        this.attack = 100;
        this.protection = 25;
    }
}
