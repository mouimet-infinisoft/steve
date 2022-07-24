const { existsSync, mkdirSync, readFileSync, writeFileSync } = require("fs");
const { resolve, join } = require("path");
const { render } = require("mustache");
const { exec } = require("child_process");

class AnalyzerPlugin {
  constructor({
    name,
    command,
    stage = "shutdown",
    date = new Date().toISOString().split("T")[0] + "-" + new Date().getTime(),
    approot=".", 
    target = resolve(approot, "artefacts", "analyze", date),
    source = resolve(approot, "config", "scripts", "analyze", "index.html"),
    dest = join(target, "index.html")
  }) {
    this.name = name;
    this.command = command;
    this.stage = stage;
    this.date = date;
    this.source = source;
    this.dest = dest;
    this.target = target;
  }

  static execHandler(err, stdout, stderr) {
    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stderr.write(stderr);
  }

  apply(compiler) {
    compiler.hooks[this.stage].tap(this.name, () => {
      this.complete();
    });
  }

  complete = () => {
    if (!existsSync(this.source)) {
      console.error("Analyzer template index.html not existing!");
      console.error(`Looking for ${this.source}`);
      process.exit(0);
    }

    if (!existsSync(this.target)) {
      mkdirSync(this.target);
    }

    const sourceTemplate = readFileSync(this.source, {
      encoding: "utf8"
    }).toString();
    const targetTemplate = render(sourceTemplate, { RUN_DATE: this.date });
    writeFileSync(this.dest, targetTemplate);

    /**
     * Delay output to be at the end completely
     */
    setTimeout(() => {
      console.log(`Analyzer complete!`);
console.log(`

   ###    ##    ##    ###    ##       ##    ## ######## ######## ########  
  ## ##   ###   ##   ## ##   ##        ##  ##       ##  ##       ##     ## 
 ##   ##  ####  ##  ##   ##  ##         ####       ##   ##       ##     ## 
##     ## ## ## ## ##     ## ##          ##       ##    ######   ########  
######### ##  #### ######### ##          ##      ##     ##       ##   ##   
##     ## ##   ### ##     ## ##          ##     ##      ##       ##    ##  
##     ## ##    ## ##     ## ########    ##    ######## ######## ##     ##                  

 ######   #######  ##     ## ########  ##       ######## ######## ######## ########  
##    ## ##     ## ###   ### ##     ## ##       ##          ##    ##       ##     ## 
##       ##     ## #### #### ##     ## ##       ##          ##    ##       ##     ## 
##       ##     ## ## ### ## ########  ##       ######      ##    ######   ##     ## 
##       ##     ## ##     ## ##        ##       ##          ##    ##       ##     ## 
##    ## ##     ## ##     ## ##        ##       ##          ##    ##       ##     ## 
 ######   #######  ##     ## ##        ######## ########    ##    ######## ########                             

`)

      console.log(`Reports are ready ${this.dest}`);
      console.log(`Opening summary in browser...`);
      exec(`start ${this.dest}`)
    }, 2000);
  };
}

module.exports = AnalyzerPlugin;
