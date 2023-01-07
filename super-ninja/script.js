class Ninja { //CLASE PADRE
    constructor(name, health, speed = 3, strength =3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
}
sayName (){
    console.log(`El nombre del ninja es ${this.name}`)
}
showStats (){
    console.log(`El ninja ${this.name} actualmente posee: Velocidad: ${this.speed}, fuerza: ${this.strength}, y salud: ${this.health}`)
}
drinkSake (){
    this.health += 10; //sumará 10 a la salud del ninja
    console.log(`El sake ha mejorado la condición de salud del ninja ${this.name} en ${this.health}`)
    //this.showStats(); //Mostrará el stat actualizado considerando la mejora de salud..
}
}

const ninja1 = new Ninja("Hyabusa", 4, 4, 4);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{ //CLASE DERIVADA DE NINJA
    constructor (name, wisdom){
        super (name, 200, 10, 10)
        this.wisdom = wisdom || 10; // otra forma de expresar un valor predeterminado si no existe dato de entrada
        // wisdom || 10 es equivalente a colocar wisdom =10 
    }
    speakWisdom(){
    this.drinkSake();
    console.log(`${this.name} nos dice que, un buen programador es alguien que siempre mira a ambos lados antes de cruzar una calle de sentido único`)
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();
