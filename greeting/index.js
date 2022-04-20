//Programa que Saluda al usuario e indica el año actual

// const name = "Luis Fernando";
// const year = new Date().getFullYear();

// console.log(`Hey ${name}, we are in ${year}`);

// console.log(process.argv);

//Vamos a hacerlo ahora un poco mas complejo
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const colors = require("colors/safe");
const commandLineArgs = require("command-line-args");

const params = [{name : "name", alias: "n", type: "String"}];

const options = commandLineArgs(params);

const name = options.name || "Friend";
const hour = new Date().getHours();

if(hour >= 6 && hour < 12){
    console.log(colors.yellow(`Good morning ${name}`));
}else if (hour >= 12 && hour < 18){
    console.log(colors.green(`Good afternoon ${name}`));
}else if (hour >= 18 && hour < 23){
    console.log(colors.red(`Good evening ${name}`));
}else{
    console.log(colors.blue(`Good night ${name}`));
}