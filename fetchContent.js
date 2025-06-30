import axios from 'axios';
import {load} from 'cheerio';

export async function fetchAndExtract({ url, selector, attr, html, verbose }) {
  if (verbose) console.log(`Fetching: ${url}`);

  const { data } = await axios.get(url);
  const $ = load(data);
  const elements = $(selector);

  if (elements.length === 0) {
    throw new Error('No elements matched the selector.');
  }

  return elements.map((i, el) => {
    if (attr) return $(el).attr(attr) || '';
    if (html) return $(el).html();
    return $(el).text().trim();
  }).get();
}

export async function collectClasses({ url, verbose }) {

  if (verbose) console.log(`Collecting class names from: ${url}`);
  const { data } = await axios.get(url);
  const $ = load(data);
  const classSet = new Set();

  $('[class]').each((i, el) => {
    const classAttr = $(el).attr('class');
    if (classAttr) {
      classAttr.split(/\s+/).forEach(cls => classSet.add(cls));
    }
  });

  return Array.from(classSet).sort();
}

