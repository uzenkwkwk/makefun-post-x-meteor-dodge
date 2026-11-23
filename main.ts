// Meteor Dodge — make.fun post-x entrypoint (Node 22, stdlib only).
// Copies the pre-rendered POST.json and SUMMARY.md from the bot dir
// into the output dir, prints the summary, and exits 0.
// No network, no wall clock, no timestamps: output is byte-identical
// across runs. Writes nowhere except the output dir.
const fs = require('node:fs');
const path = require('node:path');

const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

function main() {
  try {
    fs.mkdirSync(outDir, { recursive: true });
    for (const name of ['POST.json', 'SUMMARY.md']) {
      fs.copyFileSync(path.join(botDir, name), path.join(outDir, name));
    }
    const summary = fs.readFileSync(path.join(outDir, 'SUMMARY.md'), 'utf8');
    process.stdout.write(summary);
    if (!summary.endsWith('\n')) process.stdout.write('\n');
  } catch (err) {
    process.stderr.write('main.ts failed: ' + (err && err.message ? err.message : String(err)) + '\n');
    process.exit(1);
  }
}

main();
