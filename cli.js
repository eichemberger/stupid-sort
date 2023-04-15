#!/usr/bin/env node

const stupidSort = require("./index");

function printUsage() {
  console.log("Usage: stupid-sort <comma-separated-numbers>");
  console.log("Example: stupid-sort 5,3,8,1,2");
}

function parseArguments() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    printUsage();
    process.exit(1);
  }

  const input = args[0].split(",").map(Number);

  if (input.some(isNaN)) {
    console.error(
      "Error: Invalid input. Please provide a list of comma-separated numbers."
    );
    process.exit(1);
  }

  return input;
}

function main() {
  const input = parseArguments();
  stupidSort(input);
  console.log("Sorted list:", input);
}

main();
