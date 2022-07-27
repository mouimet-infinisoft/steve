const { name, version, author, description } = require("../../../package.json");

module.exports = () => console.log(`
${name} ${version}
${author}
${description}
---------------------------------------------------------
cli : <options>

--install           Install API as Windows Server Service.
                    To start/stop open cmd, services.msc, under THS Object Storage API
--uninstall         Uninstall API Windows Server Service
--version           API Version
--debug             Show debug information                                                                                                     

`);
