# Wiki-Info-Box

[![Greenkeeper badge](https://badges.greenkeeper.io/CraigglesO/Wiki-Info-Box.svg)](https://greenkeeper.io/)

### Search Wikipedia and get parsed HTML of just the Info-Box

The Info-Box for each Wikipedia page has the majority of important information a client could require.

+ Books:
  - Cover Photo
  - ISBN
  - OCLC
  - Dewey Decimal #
  - etc.
+ Movies:
  - Director
  - Stars
  - Box Office
  - Cover Photo
  - etc.

## Install

```
npm install p2p-graph
```

## Usage
```
var wikiInfoBox = require('./wikiInfoBox');

let infoBox = wikiInfoBox.getVcard("Catcher in the Rye", (vCard) => {
  return vCard;
});

console.log(infoBox);


OR:

wikiInfoBox.getBookID('Ender\'s Game', (ISBN, OCLC, DeweyD) => {
  console.log('ISBN: ', ISBN);
  console.log('OCLC: ', OCLC);
  console.log('DeweyD: ', DeweyD);
});

// output:
// ISBN:  0-312-93208-1
// OCLC:  23355613
// DeweyD:  -1

```
