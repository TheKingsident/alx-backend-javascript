process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const userName = data.trim();
  console.log(`Your name is: ${userName}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// This is necessary to keep the process running if using a pipe
if (process.stdin.isTTY) {
  process.stdin.resume();
}
