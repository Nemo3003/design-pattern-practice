

//This one is the "super class"
/**This principle states that objects of a superclass should be able to be replaced
 * without afecting the correctness of the program
 */
class Animal {
    eat(): void {
        console.log('The animal is eating');
    }
}

class Dog extends Animal {
    eat(): void { console.log('The dog is eating'); }
    bark(): void { console.log('Woof woof')};
}

class Cat extends Animal {
    eat(): void { console.log('The cat is eating'); }
    meow(): void { console.log('Meow!')}
}

function feedAnimal(animal: Animal): void {
    animal.eat()
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

feedAnimal(animal);  // Outputs: "The animal is eating."
feedAnimal(dog);     // Outputs: "The dog is eating."
feedAnimal(cat);     // Outputs: "The cat is eating."