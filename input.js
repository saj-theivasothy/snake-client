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
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down")
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === 'h') {
    connection.write("Say: Hello")
  }
  if (key === 'i') {
    connection.write("Say: Good")
  }
  if (key === 'b') {
    connection.write("Say: bad")
  }
  if (key === 'l') {
    connection.write("Say: lol")
  }
}

module.exports = { setupInput };