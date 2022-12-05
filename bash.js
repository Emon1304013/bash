const commands = require('./commands.js');
const os = require('os') 

//prompt the user for input
process.stdout.write(`${os.homedir()}: `);

// the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
    userInput = userInput.toString().trim();
    commands.evaluateCmd(userInput);
}); 