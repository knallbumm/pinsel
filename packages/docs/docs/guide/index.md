---
title: What is Pinsel?
---

::: warning
**Pinsel is currently in an early stage of development** and should therefore not be used in any production environment.
:::

---

# What is Pinsel?

Pinsel is a framework agnostic library to facilitate the drawing of 2D scenes. Rectangles, Circles, Paths, Text and Images can be created and manipulated with an understandable API. Pinsel then translates the instructions into either an SVG or a canvas element, depending on the [Renderer](/guide/renderer/index.html) used.

Everything is so modular that you can even replace individual parts if you want to cover a specific use case. For example, you can write an alternative renderer or runner.