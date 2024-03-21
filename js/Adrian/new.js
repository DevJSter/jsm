const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your sign? ", (answer) => {
  console.log(`Your sign is: ${answer}`);
  rl.close();
});
