#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    userInput(input) {
        if (input.includes('Enjoy being with people all the time.')) {
            this.personality = "Extrovert";
        }
        else if (input.includes('Enjoy spending time alone.')) {
            this.personality = "Introvert";
        }
    }
    get userPersonality() {
        return this.personality;
    }
}
class Main {
    async main() {
        const ans = await inquirer.prompt([
            {
                name: 'choice',
                message: chalk.hex('#7DF9FF')("What do you enjot the most?"),
                type: 'list',
                choices: ["Enjoy spending time alone.", "Enjoy being with people all the time."]
            }
        ]);
        let myPerson = new Person();
        myPerson.userInput(ans.choice);
        console.log(`${chalk.hex('#ADD8E6')(`Your are an ${chalk.bgHex('#5D3FD3')(`${myPerson.userPersonality}`)}.`)}`);
    }
}
const myObject = new Main();
myObject.main();
