const commandLine = document.getElementById('commandInput')
commandLine.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    handleCommand(this.value);
    this.value = '';
  } 
});
function handleCommand(command) {
    const outputElement = document.querySelector('.output');
    outputElement.innerHTML += `<p>${command}</p>`
    switch (command.toLowerCase()) {
      case 'help':
        outputElement.innerHTML += '<p>Available commands:</p>';
        outputElement.innerHTML += '<p>- help: Show this help message</p>';
        outputElement.innerHTML += '<p>- about: Display information about me</p>';
        break;
      case 'about':
        outputElement.innerHTML += '<img src="./assets/slika.jpg" class="slika">'
        outputElement.innerHTML += '<p>Hello World, I am Jovan Novokmet. Welcome to my portfolio!</p>';
        outputElement.innerHTML += '<p>I am a student who loves embedded system development.</p>';
        outputElement.innerHTML += '<p>My programming journey started back in 2017 with Pascal, then I progressed to C++, which is my language of choice</p>'
        outputElement.innerHTML += '<p>I am currently one of the leaders of the Club of Applied Physics and Electronics at Prva kragujevacka gimnazija</p>'
        break;
      default:
        outputElement.innerHTML += `<p>Command not foud: ${command}</p>`;
    }
    outputElement.scrollTop = outputElement.scrollHeight;
  }