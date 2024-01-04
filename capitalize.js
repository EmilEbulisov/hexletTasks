//Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву строки к верхнему регистру
const capitalize = (text) => console.log(`${text.slice(0, 1).toUpperCase()}${text.slice(1)} `);
capitalize('helmet');
