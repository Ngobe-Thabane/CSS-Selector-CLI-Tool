const { Command } = require('commander');
const axios = require('axios');
const cherio = require('cheerio');
const program = new Command();

program
  .name('CSS Attribute Selector')
  .description(
    'CLI application that takes a URL and a CSS selector arguments and prints the text content of the element that matches the selector')
  .version('0.1.0');

program
.option('--url <string>', "Website URL eg https://somewebsite.com")
.option('--selector <string>', "CSS selector that you want to print out the content of eg [attribute='value'] ")


program.parse();
const options = program.opts();

axios.get(options.url)
.then(({data})=>{
  const $ = cherio.load(data);
  console.log($(options.selector).text());
})