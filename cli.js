import { Command } from 'commander';

export function parseCLI() {
  const program = new Command();

  program
    .name('CSS Attribute Selector')
    .description('CLI tool to extract data from HTML using a CSS selector')
    .version('1.0.0')
    .requiredOption('--url <string>', 'Website URL (e.g., https://example.com)')
    .option('--selector <string>', 'CSS selector (e.g., div.class)')
    .option('--attr <attribute>', 'Extract specific attribute instead of text')
    .option('--html', 'Extract inner HTML instead of text')
    .option('--output <file>', 'Write output to a file instead of printing')
    .option('--verbose', 'Enable verbose output')
    .option('--collect-classes', 'Collect all unique class names from the page')

  program.parse();
  return program.opts()
}