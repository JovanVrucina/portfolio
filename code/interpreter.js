const commandLine = document.getElementById('commandInput')
commandLine.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    this.value = '';
  } 
});