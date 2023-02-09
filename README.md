# PayeTonKawa

## Table de matières

  * [Technologies](#technologies)
  * [Installation](#installation)
  * [Ionic](#ionic)
  * [Npm version](#npm-version)
    * [Install nvm](#install-nvm)
      * [On linux](#on-linux)
      * [On windows](#on-windows)
  * [Install dependencies](#install-dependencies)
  * [Run the project](#run-the-project)
  * [Contributors](#contributors)

## About the project

### Technologies
[![React][React.js]][React-url]
[![Ionic][Ionic]][Ionic-url]

## Installation

### Ionic

```sh
npm install -g @ionic/cli
```
### Npm version

Ionic recommend the LTS version of node and npm.

### Install nvm

#### On linux
 ```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
```sh
nvm -v
nvm install --lts
nvm use --lts
```

#### On windows

Download and install :
[Setup nvm](https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe).


```sh
nvm -v
nvm install lts
nvm use lts
```
## Install dependencies

```sh
npm install
```
## Run the project

```sh
ionic serve
```

On your web browser navigate to [localhost](http://localhost:8100/).

## Contributors

* Yohann Durel
* Gabriel Filiot
* Romain Martineau
* Erwan Leblanc
* Antoine Deyris


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Ionic]: https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white
[Ionic-url]: https://ionicframework.com/
