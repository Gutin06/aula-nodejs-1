
const {sleep} = require('./utils');
const { Musica } = require('./musica');
const {Parte} = require('./parte')


const myHero = new Musica('My Hero', 'Foo Fighters')

myHero.addParte

console.log('Esperando');

async function play() {
    try{
        console.log(myHero.nome + 'por' + myHero.artista);
        await sleep(34000);
    }catch (error){

    }
}
play();

