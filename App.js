const { Command } = require('commander');
const axios = require('axios');
const cherio = require('cheerio');
const program = new Command();

program
  .name('URL and a CSS selector')
  .description('CLI application that takes a URL and a CSS selector arguments and prints the text content of the element that matches the selector.')
  .version('0.0.1');

program.argument('<string>')
.option("-s",'--selector');
  
program.parse();

axios.get(program.args[0])
.then(({data}) =>{
  const $ = cherio.load(data);
  console.log($(`${program.args[0]}`).text());
});
