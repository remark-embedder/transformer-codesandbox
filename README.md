<div align="center">
<h1>@remark-embedder/transformer-oembed</h1>

<p><a href="https://github.com/remark-embedder">@remark-embedder</a> transformer for <a href="https://codesandbox.io">CodeSandbox</a> links</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## The problem

You're using [`@remark-embedder/core`][@remark-embedder/core] to automatically
convert [CodeSandbox][codesandbox] URLs in your markdown to the embedded version
of those URLs.

## This solution

This is a [`@remark-embedder`][@remark-embedder/core] transformer for
[CodeSandbox][codesandbox] URLs.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save @remark-embedder/transformer-codesandbox
```

## Usage

```typescript
import remarkEmbedder from '@remark-embedder/core'
import CodeSandboxTransformer from '@remark-embedder/transformer-codesandbox'
// or, if you're using CommonJS require:
// const {default: CodeSandboxTransformer} = require('@remark-embedder/transformer-codesandbox')
import remark from 'remark'
import html from 'remark-html'

const exampleMarkdown = `
This is a CodeSandbox:

https://codesandbox.io/s/css-variables-vs-themeprovider-df90h
`

async function go() {
  const result = await remark()
    .use(remarkEmbedder, {
      transformers: [CodeSandboxTransformer],
    })
    .use(html)
    .process(exampleMarkdown)

  console.log(result.toString())
}

go()
```

This will result in:

```html
<p>This is a CodeSandbox:</p>
<iframe
  src="https://codesandbox.io/embed/css-variables-vs-themeprovider-df90h"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
```

## Inspiration

It's a long story... Check out the inspiration on
[`@remark-embedder/core`][@remark-embedder/core]

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/remark-embedder/transformer-codesandbox/commits?author=MichaelDeBoey" title="Code">💻</a> <a href="https://github.com/remark-embedder/transformer-codesandbox/commits?author=MichaelDeBoey" title="Documentation">📖</a> <a href="#infra-MichaelDeBoey" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/remark-embedder/transformer-codesandbox/commits?author=MichaelDeBoey" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/remark-embedder/transformer-codesandbox/validate?logo=github&style=flat-square
[build]: https://github.com/remark-embedder/transformer-codesandbox/actions?query=workflow%3Avalidate
[coverage-badge]: https://img.shields.io/codecov/c/github/remark-embedder/transformer-codesandbox.svg?style=flat-square
[coverage]: https://codecov.io/github/remark-embedder/transformer-codesandbox
[version-badge]: https://img.shields.io/npm/v/@remark-embedder/transformer-codesandbox.svg?style=flat-square
[package]: https://www.npmjs.com/package/@remark-embedder/transformer-codesandbox
[downloads-badge]: https://img.shields.io/npm/dm/@remark-embedder/transformer-codesandbox.svg?style=flat-square
[npmtrends]: https://www.npmtrends.com/@remark-embedder/transformer-codesandbox
[license-badge]: https://img.shields.io/npm/l/@remark-embedder/transformer-codesandbox.svg?style=flat-square
[license]: https://github.com/remark-embedder/transformer-codesandbox/blob/main/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: https://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/remark-embedder/transformer-codesandbox/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/remark-embedder/transformer-codesandbox?color=orange&style=flat-square
[bugs]: https://github.com/remark-embedder/transformer-codesandbox/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/remark-embedder/transformer-codesandbox/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/remark-embedder/transformer-codesandbox/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[@remark-embedder/core]: https://github.com/remark-embedder/core
[codesandbox]: https://codesandbox.io
<!-- prettier-ignore-end -->
