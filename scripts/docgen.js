const { json, md, demo } = require('react-component-json');
const fs = require('fs');
const { resolve, join } = require('path');

const componentSrc = './src/components';

function GenOneDoc(src) {
  const indexjs = join(src, 'index.js');
  const demojs = join(src, 'demo.js');
  const indexSrc = fs.readFileSync(indexjs, 'utf8');
  const demoSrc = fs.readFileSync(demojs, 'utf8');

  const apidoc = md(json(indexSrc));
  const demodoc = demo(demoSrc);

  fs.writeFileSync(join(src, 'docs.md'), demodoc + apidoc);
  //   console.log(apidoc);
  //   console.log(demodoc);
}

const dirs = fs.readdirSync(componentSrc);

dirs.forEach(dir => {
  const absolute = resolve('./src/components', dir);
  GenOneDoc(absolute);
});
