# beemovie v1.0.1
A Bee Movie generator as a Node.js library written in TypeScript.

## Installation

### npm

```sh
npm install beemovie --save
```

### yarn

```sh
yarn add beemovie
```

## Building
Clone the repo with this command:
```sh
git clone https://github.com/roosterchicken/beemovie
```
and cd into the directory and run this command to build the `.js` files into the dist folder.
```sh
npm run build
```

## Functions
### Sentence()
The Sentence() function generates a sentence by picking a sentence randomly from the Bee Movie script.
### Script()
The Script() function prints out the entire Bee Movie script.
### Word()
The Word() function generates a random word from the Bee Movie script.
### Paragraph()
The Paragraph() function generates a random sentence by generating 3-5 sentences either with a period or a question mark.
### Version()
The Version() function prints out the version of the library.
## Usage

### JavaScript

#### Sentence()

```javascript
const beemovie = require("beemovie");
// Prints out 1 sentence
console.log(beemovie.Sentence(1));
// Prints out 2 sentences
console.log(beemovie.Sentence(2));
```

#### Script()

```javascript
const beemovie = require("beemovie");
// Prints out the entire Bee Movie Script
console.log(beemovie.Script());
```

#### Word()

```javascript
const beemovie = require("beemovie");
// Prints out a word from the Bee Movie
console.log(beemovie.Word(1));
```

#### Paragraph()

```javascript
const beemovie = require("beemovie");
// Prints out a 3-5 sentence paragraph
console.log(beemovie.Paragraph());
// Prints out 2 3-5 sentence paragraphs
console.log(beemovie.Paragraph(2));
```
#### Version()
```javascript
const beemovie = require("beemovie");
// Saves the output of the beemovie.Version() function into the variable barryversion
const barryversion = beemovie.Version();
console.log(`You are running beemovie v${barryversion}`);
```
### TypeScript

#### Sentence()

```typescript
import beemovie from "beemovie";
// Prints out 1 sentence
console.log(beemovie.Sentence(1));
// Prints out 2 sentences
console.log(beemovie.Sentence(2));
```

#### Script()

```typescript
import beemovie from "beemovie";
// Prints out the entire Bee Movie Script
console.log(beemovie.Script());
```

#### Word()

```typescript
import beemovie from "beemovie";
// Prints out a word from the Bee Movie
console.log(beemovie.Word(1));
```

#### Paragraph()

```typescript
import beemovie from "beemovie";
// Prints out a 3-5 sentence paragraph
console.log(beemovie.Paragraph());
// Prints out 2 3-5 sentence paragraphs
console.log(beemovie.Paragraph(2));
```
#### Version()
```typescript
import beemovie from "beemovie";
// Saves the output of the beemovie.Version() function into the variable barryversion
const barryversion = beemovie.Version();
console.log(`You are running beemovie v${barryversion}`);
```