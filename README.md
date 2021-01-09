# @rooster-chicken/beemovie and the v0.2.x branch is deprecated. Please switch to the package [beemovie](https://www.npmjs.com/package/beemovie).

# beemovie v0.2.4
Bee Movie module written in typescript

## Installation

### npm

```sh
npm install @rooster-chicken/beemovie --save
```

### yarn

```sh
yarn add @rooster-chicken/beemovie
```

## Building

```sh
npm run build
```

## Usage

### JavaScript

#### beeMovie()

```javascript
const beemovie = require("@rooster-chicken/beemovie");
// Prints out 1 sentence
console.log(beemovie.beeMovie(1));
// Prints out 2 sentences
console.log(beemovie.beeMovie(2));
```

#### beeMovieScript()

```javascript
const beemovie = require("@rooster-chicken/beemovie");
// Prints out the entire Bee Movie Script
console.log(beemovie.beeMovieScript());
```

#### beeMovieWord()

```javascript
const beemovie = require("@rooster-chicken/beemovie");
// Prints out a word from the Bee Movie
console.log(beeMovieWord(1));
```

#### beeMovieParagraph()

```javascript
const beemovie = require("@rooster-chicken/beemovie");
// Prints out a 3-5 sentence paragraph
console.log(beemovie.beeMovieParagraph());
// Prints out 2 3-5 sentence paragraphs
console.log(beemovie.beeMovieParagraph(2));
```

### TypeScript

#### beeMovie()

```typescript
import { beeMovie } from "@rooster-chicken/beemovie";
// Prints out 1 sentence
console.log(beeMovie(1));
// Prints out 2 sentences
console.log(beeMovie(2));
```

#### beeMovieScript()

```typescript
import {  beeMovieScript } from "@rooster-chicken/beemovie";
// Prints out the entire Bee Movie Script
console.log(beeMovieScript());
```

#### beeMovieWord()

```typescript
import { beeMovieWord } from "@rooster-chicken/beemovie";
// Prints out a word from the Bee Movie
console.log(beeMovieWord(1));
```

#### beeMovieParagraph()

```typescript
import { beeMovieParagraph } from "@rooster-chicken/beemovie"
// Prints out a 3-5 sentence paragraph
console.log(beeMovieParagraph());
// Prints out 2 3-5 sentence paragraphs
console.log(beeMovieParagraph(2));
```
