const { name, version, author, description } = require("../../package.json")

module.exports = () => console.log(`
---------------------------------------------------------

        ${description} - ${name}@${version}
                 by ${author}

---------------------------------------------------------
./is : <command> [options]

Commands
new                   Generate new micro
pix                   Create template in current directoy
update                Pulls configuration

Options
--version             Version
--debug               Show debug information                                                                                                    
`);
