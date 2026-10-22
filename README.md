<h1 align="center">Node Module Starter 🛠️</h1>
<h2 align="center">
  Starter repository for developing node_modules
</h2>
<p align="center">
  <a href="https://npmjs.org/package/@alessiofrittoli/node-module-starter">
    <img src="https://img.shields.io/npm/v/@alessiofrittoli/node-module-starter" alt="Latest version"/>
  </a>
  <a href="https://coveralls.io/github/alessiofrittoli/node-module-starter">
    <img src="https://coveralls.io/repos/github/alessiofrittoli/node-module-starter/badge.svg" alt="Test coverage"/>
  </a>
  <a href="https://socket.dev/npm/package/@alessiofrittoli/node-module-starter/overview">
    <img src="https://socket.dev/api/badge/npm/package/@alessiofrittoli/node-module-starter" alt="Socket Security score"/>
  </a>
  <a href="https://npmjs.org/package/@alessiofrittoli/node-module-starter">
    <img src="https://img.shields.io/npm/dm/@alessiofrittoli/node-module-starter.svg" alt="npm downloads"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/node-module-starter">
    <img src="https://badgen.net/bundlephobia/dependency-count/@alessiofrittoli/node-module-starter" alt="Dependencies"/>
  </a>
  <a href="https://libraries.io/npm/%40alessiofrittoli%2Fnode-module-starter">
    <img src="https://img.shields.io/librariesio/release/npm/@alessiofrittoli/node-module-starter" alt="Dependencies status"/>
  </a>
</p>
<p align="center">
  <a href="https://bundlephobia.com/package/@alessiofrittoli/node-module-starter">
    <img src="https://badgen.net/bundlephobia/min/@alessiofrittoli/node-module-starter" alt="minified"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/node-module-starter">
    <img src="https://badgen.net/bundlephobia/minzip/@alessiofrittoli/node-module-starter" alt="minizipped"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/node-module-starter">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@alessiofrittoli/node-module-starter" alt="Tree shakable"/>
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
- [Credits](#made-with-)

---

### Getting started (delete once cloned in your project)

Run the following command to start using `node-module-starter` for your projects:

```bash
git clone git@github.com:alessiofrittoli/node-module-starter.git && git remote remove origin
```

install dependencies

```bash
pnpm i
```

Read the [Creating a repository from a template - GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for more in-detail informations about creating a new Repository from a template using GitHub web interface.

---

### Getting started (customize based on your project needs)

Run the following command to start using `{package_name}` in your projects:

```bash
npm i {package_name}
```

or using `pnpm`

```bash
pnpm i {package_name}
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
