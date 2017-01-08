# Wiki-Info-Box

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
const wikiVcard = require('./wikiFinder');

let infoBox = wikiVcard.getVcard("Catcher in the Rye", (vCard) => {
  return vCard;
});

console.log(infoBox);

```
