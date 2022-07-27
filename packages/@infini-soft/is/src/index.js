const commands = require("./commands");
const options = require("./options");
const usage = require("./consts/usage");
const banner = require("./consts/banner");
const _cmd = process.argv?.[2]

if (process.argv.join().includes("--debug")) {
    console.debug(`Arguments`, process.argv)
    console.debug(`Commandts`, commands);
}

banner()
if (!_cmd || !commands?.[_cmd]?.()) {
    usage()
}
