const { spawn } = require('child_process');

const child = spawn('./1-stdin.js');

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

setTimeout(() => {
  child.stdin.write('Alice\n');
}, 1000);
