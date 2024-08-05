const greetings = [
    "Hello World from the Office Hours in the terminal!",
    "Greetings from the coding world!",
    "Hi there! Office Hours are in session!",
    "Hey! Ready to learn some cool stuff?",
    "Hello, curious coder! Welcome to the Office Hours!"
];

const getRandomGreeting = () => greetings[Math.floor(Math.random() * greetings.length)];

const asciiBanner = `
    ____  _  _  ____  __    ___  _  _    _  _  __  __  ____  ____ 
   / ___)/ )( \\(  __)(  )  / __)( \\/ )  / )( \\(  )(  )(  __)/ ___)
  / (___) /\\ / ) _) / (_/\\\\__ \\/ \\/ \\  ) \\/ ( )(__)(  ) _) \\___ \\
   \\____)\\__/ (____)\\____/(____/\\_)(_/  \\____/\\____/ (____)(____/
  `;

const hello = () => `${asciiBanner}\n\n${getRandomGreeting()}`;
console.log(hello());
exports.hello = hello;
