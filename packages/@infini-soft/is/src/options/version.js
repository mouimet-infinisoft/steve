const { name, version, author } = require("../../package.json");

module.exports = () =>
console.log(`
${name} ${version}
${author}
`);
