/*//multiplicacion
function factorial(number){
    if (number === 0 || number === 1)
    return 1;

    return number * factorial(number - 1);

}
console.log(factorial(5));

//suma
function sum(number){
    if (number === 1)
    return number

    return number + sum(number - 1);
}
console.log(sum(5))


const person = {
    firstName: "Juan",
    lastName: "Perez",
    addres:{
        street: "Calle Principal",
        city: "San Miguel",
        country: "El Salvador"
    },
    hobbies: [`leer`,`correr`]
} 

console.log(person.addres.city);
console.log(person.hobbies[0]);*/

const employees=[
    {id: 1, fullName: "Juan Perez", email: "juanperez@gmail.com", age: 20},
    {id: 2, fullName: "Pedro Perez", email: "pedroperez@gmail.com", age: 30},
    {id: 3, fullName: "Ana Rodriguez", email: "anarodriguez@gmail.com", age: 25},
    {id: 4, fullName: "Maria Alvarez", email: "mariaalvarez@gmail.com", age: 27},
    {id: 5, fullName: "Carlos Gomez", email: "carlosgomez@gmail.com", age: 22},
];

const filteredEmployees = employees.filter(employee => employee.id == 4);
console.log(filteredEmployees);
    