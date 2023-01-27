> :warning: **This library is still in an early stage of development and should therefore not be used productively at this point in time! Many things are either not yet implemented or not documented.**

<p align="center" style="margin-top:3rem">
  <img src="./pinsel-logo-v-0-5.png" width="320px"/>
</p>
<h1 align="center">Pinsel.js</h1>
<h4 align="center">A lightweight, framework agnostic 2D drawing libary with focus on performance and developer experience.</h4>

<p align="center" style="margin-top:0.5rem">
  <a href="https://badge.fury.io/js/pinsel">
    <img src="https://badge.fury.io/js/pinsel.svg">
  </a>
</p>

## Features

- 🖌️ Draw Rectangles, Circles, Text, Images and Paths
- ⚡️ Optimized for Performance (efficient rerendering & caching, OffscreenCanvas, Adaptive Frame-Rate)
- 🔗 Easy to use API with e.g. Width-Anchors (shapeA.width = shapeB.width)
- 🙏🏽 Framework agnostic (Works with React, Vue, Svelte & Co.)
- 🖼️ Canvas- & SVG-Support
- 🎁 Many more little things that make developers happy

## Installation

```bash
# pnpm
pnpm add pinsel

# npm
npm i pinsel
```

_There is also the possibility to use only parts of Pinsel or to write extensions yourself. If you want to know more about this, have a look at the detailed documentation: `@pinsel/core` & `@pinsel/renderer`_

## Motivation
We were looking for a Libary to help us draw on the HTML5 Canvas, but to our surprise we couldn't find a suitable one. Known libaries either have a strong focus on artistic use (e.g. [p5.js](https://github.com/processing/p5.js?files=1)), or are mainly designed to visualise data (e.g. [D3.js](https://github.com/d3/d3)). Others are only documented in fragments, are inconvenient to use or simply lack features.

This is how we came up with the idea of writing a library ourselves, with which simple little gimmicks can be implemented. One that is easy to use and designed for TypeScript.

## Simple Usage
```typescript
// Creating Pinsel Instance
const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
});

// Adding Rectangle
const rect = rectangle({ width: 0.5, height: 0.3, x: 0.1, y: 0 });
rect.stroke = 'pink';
p.scene.add(rect);

// Adding Circle
const circ = circle({
  radius: 0.1,
  x: 0.5,
  y: 0.5,
});
circ.stroke = 'green';
p.scene.add(circ);

// Adding Text
const text = label({
  text: 'PINSEL is the best!',
  x: 0.5,
  y: 0.5,
});
text.font = font(32, 'Fira Code');
p.scene.add(text);

```

## Demo
If you want to see more examples of what Pinsel could be used for, feel free to check out our examples at [demo.pinsel.xyz](https://demo.pinsel.xyz)

## Contributing

This project is still at such an early stage that it is unfortunately not possible to contribute to it. As soon as we have reached a first stable state, we will open the project and look forward to any assistance.

## Crew

This project is initiated and maintained by the crew behind [smunzl](https://smunzl.com): a service to send unique digital greeting cards.

## License

This project is licensed under the MIT license. Feel free to edit and distribute this template as you like.

See LICENSE for more information.
