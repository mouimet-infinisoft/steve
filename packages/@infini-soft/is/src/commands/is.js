const commands = require(".");

module.exports = () => {
  commands?.banner?.();

  const flatCommands = Object.keys(commands).join(" ");

  var runned = false;
  process.argv.forEach((_cmd) => {

    if (flatCommands.includes(_cmd)) {
      commands[_cmd]();
      runned = true;
    }
  });

  if (!runned) {
    commands?.usage();
  }
};
