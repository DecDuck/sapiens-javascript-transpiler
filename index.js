const castl = require("./castl/castl");
const parser = require("esprima");
const fs = require("fs");
const path = require("path");

function compile(source) {
  const ast = parser.parse(source, { tolerant: true });
  const codeStrings = [];

  // At necessary runtime includes
  codeStrings.push(`local _ENV = mjrequire \"castl/runtime\";`);
  codeStrings.push(`_ENV.__use(_ENV);`);

  codeStrings.push(castl.compileAST(ast, {}).compiled);

  return codeStrings.join("\n");
}

function recursivelyFindRelative(dir) {
  const results = [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results.push(...recursivelyFindRelative(filePath));
      return;
    }
    results.push(filePath);
  });
  return results;
}

const settings = JSON.parse(fs.readFileSync("./spjs.json", "utf-8"));
const inDir = settings.src;
const outDir = settings.build;

fs.rmSync(outDir, { recursive: true });

const sourceFiles = recursivelyFindRelative(inDir);
console.log(sourceFiles);
sourceFiles.forEach((file) => {
  const oldPath = file;
  const newPath = path
    .join(outDir, "scripts", path.relative(inDir, file))
    .replace(".js", ".lua");

  const dirName = path.dirname(newPath);
  fs.mkdirSync(dirName, { recursive: true });

  const lua = compile(fs.readFileSync(oldPath, "utf-8"));
  fs.writeFileSync(newPath, lua);
});

const modinfoPath = path.join(outDir, "modInfo.lua");
const modinfo = settings.modinfo;
fs.writeFileSync(
  modinfoPath,
  `
local modInfo = {
    name = "${modinfo.name}",
    description = [[${modinfo.description}]],
    version = "${modinfo.version}",
    type = "world",
    preview = "${modinfo.preview ?? modinfo.icon ?? ""}",
    developer = "${modinfo.developer ?? ""}",
    website = "${modinfo.website ?? ""}",
}

return modInfo`.trim()
);
