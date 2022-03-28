class Animal {
    constructor(especie) {
        this.especie = especie;
    }
    falar() {
        console.log(`${this.especie}: `);
    }
    comer() {
        console.log(`${this.especie}: **`);
    }
    dorme() {
        console.log(`${this.especie}: **`);
    }
}
class Cachorro extends Animal {
    falar() {
        console.log(`${this.especie}: Au Au AUUUUUU`);
    }
    comer() {
        console.log(`${this.especie}: *Cachorro está comendo ração*`);
    }
    dorme() {
        console.log(`${this.especie}: *Cachorro está dormindo*`);
    }
}
const cachorro = new Cachorro('Cachorro')
cachorro.falar();
cachorro.comer();
cachorro.dorme();