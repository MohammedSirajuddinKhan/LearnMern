// practice this with html file and run it in browser console to see the output

const saySiraj =function () {
console.log("Sirajuddin");
}

setTimeout(saySiraj, 2000); // This will log "Sirajuddin" after 2 seconds

clearTimeout(saySiraj); // This will cancel the timeout, so "Sirajuddin" will not be logged