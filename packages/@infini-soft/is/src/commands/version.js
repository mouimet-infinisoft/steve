const { name, version, author } = require("../../../package");

module.exports = () =>
console.log(`
${name} ${version}
${author}
`);
