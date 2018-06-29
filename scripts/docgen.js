const { json, md, demo } = require("react-component-json");
const fs = require("fs");

const src = fs.readFileSync("./src/components/Tabs/index.js", "utf8");
const demoSrc = fs.readFileSync("./src/components/Tabs/demo.js", "utf8");

const apidoc = md(json(src));
const demodoc = demo(demoSrc);

console.log(apidoc);
console.log(demodoc);
