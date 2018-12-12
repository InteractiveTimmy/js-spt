# js-spt

## Description

JS-SPT is a javascript Structure Performance Test designed to validate which data structure takes the least amount of time to handle a set of operations. This project was designed to help guide other projects and their data structures by demonstrating real world performance differences between each data structuring method in live loops.

## Installation

JS-SPT is prebuilt, and contains a webpage example as well as a NodeJS example. If you would like to rebiuld the bundled files, you will need to install the dev-dependencies via npm using the command `npm install`.

## Usage

### Building

To build the project, simply run the following command: `npm run build`. This will build a **spt.js** *UMD* file as well as a **spt.module.js** *ES6* file.

If you would like to actively modify and rebuild on `/src/**` change, run the following command: `npm run watch`. This will build the same two files mentioned above.

### Examples

To run the NodeJS example, simply run the command `npm start` from the projects root directory. This will run the application using the default controlled variables:
 * 50 Trials
 * 1000000 Operations per Trial
 * An Array, Object, and Class Structure

To run the Web Example, navigate via your file explorer to [/examples/](https://github.com/InteractiveTimmy/js-spt/tree/master/examples) and load the [./index.html](https://github.com/InteractiveTimmy/js-spt/blob/master/examples/index.html) file into your favorite browser. The example will contain a form for customizing the controls for the test as well as some instructional information in regards to usage.