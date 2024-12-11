// Alt gr + F2 para cambiar la definición de la clase o función en todos los archivos

export class SuperHero {

    name: string = '';
    power: string = '';
    age: number = 0;
    hobbies: string[] = [];

    private _secretName: string = '';

    constructor() { }

    get secretName() {
        return this._secretName;
    }

    usePower() { }

    fly() { }

    run() { }

    walk() { }

    revive() { }

}