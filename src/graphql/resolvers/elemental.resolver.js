const hello = () => { return 'hola mundo' };
const getPerson = (_, args) => { return `Hello, my name is ${args.name}, I'm ${args.age} years old.` };
const getInt = () => { return Math.floor(Math.random() * 100) };
const getFloat = () => { return Math.random() * 100 };
const getBoolean = () => { return Math.random() > 0.5 };
const getString = () => { return 'Hello, world!' };
const getId = () => {return '1'};
const getNumbers = (_, args) => {return args.numbers};

module.exports = { hello, getPerson, getInt, getFloat, getBoolean, getString, getId, getNumbers };
