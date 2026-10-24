<h1 align="center">TypedMap 🗺️</h1>
<h2 align="center">
  Handle strictly typed Maps
</h2>
<p align="center">
  <a href="https://npmjs.org/package/@alessiofrittoli/typed-map">
    <img src="https://img.shields.io/npm/v/@alessiofrittoli/typed-map" alt="Latest version"/>
  </a>
  <a href="https://coveralls.io/github/alessiofrittoli/typed-map">
    <img src="https://coveralls.io/repos/github/alessiofrittoli/typed-map/badge.svg" alt="Test coverage"/>
  </a>
  <a href="https://socket.dev/npm/package/@alessiofrittoli/typed-map/overview">
    <img src="https://socket.dev/api/badge/npm/package/@alessiofrittoli/typed-map" alt="Socket Security score"/>
  </a>
  <a href="https://npmjs.org/package/@alessiofrittoli/typed-map">
    <img src="https://img.shields.io/npm/dm/@alessiofrittoli/typed-map.svg" alt="npm downloads"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/typed-map">
    <img src="https://badgen.net/bundlephobia/dependency-count/@alessiofrittoli/typed-map" alt="Dependencies"/>
  </a>
  <a href="https://libraries.io/npm/%40alessiofrittoli%2Ftyped-map">
    <img src="https://img.shields.io/librariesio/release/npm/@alessiofrittoli/typed-map" alt="Dependencies status"/>
  </a>
</p>
<p align="center">
  <a href="https://bundlephobia.com/package/@alessiofrittoli/typed-map">
    <img src="https://badgen.net/bundlephobia/min/@alessiofrittoli/typed-map" alt="minified"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/typed-map">
    <img src="https://badgen.net/bundlephobia/minzip/@alessiofrittoli/typed-map" alt="minizipped"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/typed-map">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@alessiofrittoli/typed-map" alt="Tree shakable"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/sponsors/alessiofrittoli">
    <img src="https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2" alt="Fund this package"/>
  </a>
  <a href="https://github.com/sponsors/alessiofrittoli">
    <img src="https://img.shields.io/github/sponsors/alessiofrittoli?label=Sponsor&logo=GitHub" alt="Currently sponsoring this project"/>
  </a>
</p>

[sponsor-badge]: https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2
[sponsor-url]: https://github.com/sponsors/alessiofrittoli

### Table of Contents

- [Getting started](#getting-started)
- [Development](#development)
  - [Local development](#local-development)
  - [Production build](#production-build)
  - [Unit tests](#unit-tests)
    - [Run tests with coverage](#run-tests-with-coverage)
  - [Contributing](#contributing)
  - [Security](#security)
- [API Reference](#api-reference)
- [Credits](#made-with-)

---

### Getting started

Run the following command to start using `@alessiofrittoli/typed-map` in your projects:

```bash
npm i @alessiofrittoli/typed-map
```

or using `pnpm`

```bash
pnpm i @alessiofrittoli/typed-map
```

---

### Development

Run the following to start development

```shell
nvm use

pnpm i
```

#### Local development

Run the following

```shell
pnpm dev
```

This will generate unminified output code, sourcemaps and will enable source file watcher.

---

#### Production build

Run the following to create a local production build

```shell
pnpm build
```

This will generate minified output code without sourcemaps.

---

#### Unit tests

Run all the defined test suites by running the following:

```shell
# Run tests and watch file changes.
pnpm test:watch

# Run tests in a CI environment.
pnpm test:ci
```

---

##### Run tests with coverage

An HTTP server is then started to serve coverage files from `./coverage` folder.

⚠️ You may see a blank page the first time you run this command. Simply refresh the browser to see the updates.

```shell
pnpm test:coverage:serve
```

---

#### Contributing

Contributions are truly welcome!

Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

Help keep this project up to date with [GitHub Sponsor][sponsor-url].

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

---

#### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

---

#### API Reference

##### Interface `TypedMap<T, P, K>`

A type-safe extension of the Map class that enforces key-value relationships based on a provided type.

<details>

<summary style="cursor:pointer">Type parameters</summary>

| Parameter | Type                      | Default   | Description                                                                         |
| --------- | ------------------------- | --------- | ----------------------------------------------------------------------------------- |
| `T`       | `Record<string, unknown>` | `unknown` | The object type defining the key-value relationships.                               |
| `P`       | `boolean`                 | `true`    | Defines whether the `Map.get()` method should return a possibily `undefined` value. |
| `K`       | `keyof T`                 | `keyof T` | Internal - The subset of keys in T that are allowed in the Map.                     |

</details>

---

##### `getTypedMap<T, P, K>`

Creates a new instance of a type-safe `Map` with the given type.

<details>

<summary style="cursor:pointer">Type parameters</summary>

- See [Interface `TypedMap<T, P, K>` - Type parameters](#interface-typedmapt-p-k)

</details>

---

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter  | Type                                       | Description                                |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| `iterable` | `Iterable<readonly [ K, T[ K ] ]> \| null` | Initial `Map` constructor iterable object. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `TypedMap<T, P, K>`

A new instance of a type-safe `Map`.

</details>

---

<details>

<summary style="cursor:pointer">Usage</summary>

###### Basic usage

```ts
import { getTypedMap } from '@alessiofrittoli/typed-map'

interface User {
  name: string
  age: number
  isActive: boolean
}

const user = getTypedMap<User>([
  ['name', 'Foo'],
  ['age', 27],
  ['isActive', true],
])

console.log(user.get('name')) // type: `string | undefined`
console.log(user.get('age')) // type: `number | undefined`
console.log(user.get('isActive')) // type: `boolean | undefined`
```

---

###### Respect the given type

```ts
import { getTypedMap } from '@alessiofrittoli/typed-map'

interface User {
  name: string
  age: number
  isActive: boolean
  banned?: boolean
}

const user = getTypedMap<User, false>([
  ['name', 'Foo'],
  ['age', 27],
  ['isActive', true],
])

console.log(user.get('name')) // type: `string`
console.log(user.get('age')) // type: `number`
console.log(user.get('isActive')) // type: `boolean`
console.log(user.get('banned')) // type: `boolean | undefined`
```

</details>

---

### Made with ☕

<table style='display:flex;gap:20px;'>
  <tbody>
    <tr>
      <td>
        <img alt="avatar" src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
      </td>
      <td>
        <table style='display:flex;gap:2px;flex-direction:column;'>
          <tbody>
              <tr>
                <td>
                  <a href='https://github.com/alessiofrittoli' target='_blank' rel='noopener'>Alessio Frittoli</a>
                </td>
              </tr>
              <tr>
                <td>
                  <small>
                    <a href='https://alessiofrittoli.it' target='_blank' rel='noopener'>https://alessiofrittoli.it</a> |
                    <a href='mailto:info@alessiofrittoli.it' target='_blank' rel='noopener'>info@alessiofrittoli.it</a>
                  </small>
                </td>
              </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
