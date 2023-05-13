class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void{
        console.log("The animal makes a sound")
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void{
        console.log("The dog makes a sound")
    }
}

const fido = new Dog("Fido");
console.log(fido.name);
fido.makeSound();