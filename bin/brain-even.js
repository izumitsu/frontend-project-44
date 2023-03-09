#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';
  
  const name = welcome();
  const game = () => {
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i+=1) {
    const num = getRandomNumber(1, 101)
    const isEven = (num) => num % 2 === 0 ? 'yes' : 'no'
    console.log(`Questions: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(num) === answer) {
      console.log ( 'Corret!' )
    } else {
      console.log (`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num)}'`)
    break
  }
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
}

game();
