import fs from 'fs';

export function outputResult(results, { output, verbose }) {
  const content = results.join('\n');

  if (output) {
    fs.writeFileSync(output, content);
    if (verbose) console.log(`Output written to ${output}`);
  } else {
    console.log(content);
  }
}
