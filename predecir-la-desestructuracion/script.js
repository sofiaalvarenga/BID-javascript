//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars; // Almacena el valor 'Tesla' del array en randomCar
const [ ,otherRandomCar ] = cars; 
//Almacena el valor 'Mercedes' (sgte valor después de la ,) del array en la const otherRandomCar 
console.log(randomCar); // Logs 'Tesla'
console.log(otherRandomCar); // Logs 'Mercedes'

//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // Almacena el valor 'Elon' del objeto employee en la const otherName
console.log(name); //Error: variable name no está definida, es una propiedad del objeto employee
console.log(otherName); //Registraría 'Elon' sin el -error anterior-S

//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person; 
//No existe la propiedad password dentro del objeto, no se almacena ningún valor en hashedPassword
console.log(password); //Logs '12345'
console.log(hashedPassword); // hashedPassword no existe en el objeto person, registrará undefined

//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // first almacena el segundo valor (2) del array numbers
const [,,,second] = numbers; // second almacena el cuarto valor (5) del array numbers
const [,,,,,,,,third] = numbers; //third almacena el 8vo valoor del array numbers (2)
console.log(first == second); //Registrará -false- ya que first (2) no es igual a second (5)
console.log(first == third); // Registrará -true-  ya que first (2) es igual a third (2)

//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // Almacena valor de la propiedad key ('value') dentro de la const key
const { secondKey } = lastTest; // Almacena valor de secondKey en la const secondKey
const [ ,willThisWork] = secondKey; //Almacena el segundo valor (5) del array second key en la const willThisWork
console.log(key); //Logs 'value'
console.log(secondKey); // Logs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //Logs el primer valor del array secondKey (posición 0) = 1
console.log(willThisWork); // Logs 5

