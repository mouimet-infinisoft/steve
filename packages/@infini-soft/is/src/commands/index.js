const version = require("./version");
const debug = require("./debug");
const banner = require("./banner");
const usage = require("./usage");

module.exports = {
  "--debug": debug,
  "--version": version,
  banner,
  usage
};
