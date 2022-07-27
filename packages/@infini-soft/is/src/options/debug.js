


if (JSON.stringify(process.argv).includes("--debug")) {
    console.log(`DEBUG MODE
Path configuration`);
    console.log(`Commands path ${__dirname}
    `);
    process.exit(0);
}