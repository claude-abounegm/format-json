'use strict';

const pkg = require('./package.json');
const JSON_DEPTH = process.env['JSON_DEPTH'] || 500;

if (process.argv.length === 3) {
    const fs = require('fs');
    const [, , fileName] = process.argv;

    if (fileName === '-') {
        const {
            stdin
        } = process;

        const data = [];
        stdin.setEncoding('utf8');
        stdin.on('data', chunk => data.push(chunk));
        stdin.on('end', () => echoFormattedJson(data));
    } else {
        let fileContent;
        try {
            fileContent = fs.readFileSync(fileName);
        } catch (_) {
            return console.error('Error: error opening file');
        }

        echoFormattedJson(fileContent);
    }
} else {
    usage();
}

function usage() {
    console.error(`
${pkg.description}

Usage:
    format-json <file|->
      To read from stdin: format-json -
      To read from file : format-json file

Version: ${pkg.version}
    `);
}

function echoFormattedJson(str) {
    if (Array.isArray(str)) {
        str = str.join('');
    } else if (typeof str !== 'string') {
        throw new Error('str needs to be a string');
    }

    try {
        const obj = JSON.parse(str);

        // find better way to parse data
        console.dir(obj, {
            colors: true,
            depth: +JSON_DEPTH
        });
    } catch (_) {
        console.error('Error: could not parse JSON');
    }
}