#!/usr/bin/env node
'use strict';

var cli = require('commander');
var app = require('../dist/index').default;
var path = require('path');

cli
  .version('1.0.0')
  .option('-f, --file <path>', 'Parse file instructions')
  .parse(process.argv);

if (cli.file) {
  app.run(path.resolve(cli.file));
}
