/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { existsSync, mkdirSync, readFileSync, writeFileSync } = require("fs");
const { resolve, join } = require("path");
const { render } = require("mustache");
const { APPROOT } = require("../../paths");

module.exports = {
  getDate: () =>
    new Date().toISOString().split("T")[0] + "-" + new Date().getTime(),
  complete: (date) => {
    const target = resolve(APPROOT, "artefacts", "analyze", date);
    const source = resolve(
      APPROOT,
      "config",
      "scripts",
      "analyze",
      "index.html"
    );
    const dest = join(target, "index.html");

    if (!existsSync(source)) {
      console.error("Analyzer template index.html not existing!");
      console.error(`Looking for ${source}`);
      process.exit(0);
    }

    if (!existsSync(target)) {
      mkdirSync(target);
    }

    const sourceTemplate = readFileSync(source, {
      encoding: "utf8"
    }).toString();
    const targetTemplate = render(sourceTemplate, { RUN_DATE: date });
    writeFileSync(dest, targetTemplate);

    console.log(`Analyzer complete!`);
    console.log(`Reports are ready ${dest}`);

    return date;
  }
};
