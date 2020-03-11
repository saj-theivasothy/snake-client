let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',(data) => {
    handleUserInput(data, connection);
  });
  return stdin;
}

const handleUserInput = function(key, connection) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
    console.log('You pressed w');
  }
  if (key === 'a') {
    connection.write("Move: left")
    console.log('You pressed a');
  }
  if (key === 's') {
    connection.write("Move: down")
    console.log('You pressed s');
  }
  if (key === 'd') {
    connection.write("Move: right")
    console.log('You pressed d');
  }
}

module.exports = { setupInput };