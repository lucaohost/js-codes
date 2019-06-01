let betweenNumbers = [2, 3, 4];
let allNumbers = [1, ...betweenNumbers, 5];
document.write(allNumbers);
document.write("<br>");
document.write("<br>");

let person = { name: "Lucas", age: 21 };
let personId = { cpf: "123.456.08-70", rg: "5484568004" };
let personWithId = { ...person, ...personId };
person.name = "Anothe Lucas";
document.write(JSON.stringify(personWithId));
document.write("<br>");
document.write(JSON.stringify(person));

document.write("<br>");
document.write("<br>");
let personTwoId = { cpf: "173.423.65-11", rg: "5484568004" };
let personTwo = { name: "John", age: 22, ...personTwoId };
document.write(JSON.stringify(personTwo));

document.write("<br>");
document.write("<br>");
let bus = [{ nome: "James", age: 61 }, { nome: "Steve", age: 45 }];
let otherBus = [... bus];
otherBus[0].nome = "Peter";
document.write(JSON.stringify(bus));
document.write("<br>");
document.write(JSON.stringify(otherBus));
