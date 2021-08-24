const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let timer = 0;
for (let icon of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${icon}   `);
  }, timer);
  timer += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, timer);