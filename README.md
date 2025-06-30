# CSS Selector CLI Tool

A powerful CLI application to extract and analyze HTML content from websites using CSS selectors. This tool supports fetching text, attributes, and inner HTML, collecting all class names, and crawling internal links for deeper analysis.

## Features

-  Extract content using a CSS selector
- ️ Retrieve specific HTML attributes
-  Clean and readable text or raw HTML output
-  Collect all unique class names on a page
-  Save results to a file
-  Verbose logging for debugging

## Installation

Clone the repository and set up the CLI:

```bash
git clone https://github.com/yourusername/css-selector-cli.git
cd css-selector-cli
npm install
npm link
```

This makes the `cli-selector` command available globally on your system.

## Usage

```bash
cli-selector --url <URL> [options]
```

### Required:
- `--url <string>`: URL of the website to scrape

### Optional:
- `--selector <string>`: CSS selector to extract content
- `--attr <attribute>`: Extract a specific attribute instead of text
- `--html`: Extract inner HTML instead of text
- `--output <file>`: Write the output to a file
- `--verbose`: Print extra logs
- `--collect-classes`: Collect all unique class names from the page


### Examples

Extract all `<h1>` text:
```bash
cli-selector --url https://example.com --selector h1
```

Get all `href` attributes from `<a>` tags:
```bash
cli-selector --url https://example.com --selector a --attr href
```

Collect all class names on a page:
```bash
cli-selector --url https://example.com --collect-classes
```

Save results to a file:
```bash
cli-selector --url https://example.com --selector p --output results.txt
```

## Notes
- Requires Node.js 16+
- Respects origin boundaries when crawling internal links
- The `bin` entry in `package.json` links the command `cli-selector` to `index.js`

