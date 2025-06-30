#!/usr/bin/env node

import { parseCLI } from './cli.js';
import { fetchAndExtract, collectClasses } from './fetchContent.js';
import { outputResult } from './outputHandler.js';

const options = parseCLI();

(async () => {
  try {
    if (options.collectClasses) {
      const classes = await collectClasses(options);
      outputResult(classes, options);
    }else {
      const results = await fetchAndExtract(options);
      outputResult(results, options);
    }
  } catch (err) {
    console.error('Error:', err.message);
    if (options.verbose) console.error(err.stack);
    process.exit(1);
  }
})();
