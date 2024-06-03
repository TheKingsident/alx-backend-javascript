process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const userName = data.trim();
  console.log(`Your name is: ${userName}`);
  console.log('This important software is now closing');
  process.exit();
});
