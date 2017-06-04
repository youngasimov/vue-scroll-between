# vue-scroll-between

> Vue library for add or remove DOM component base on scroll position

[demo](https://youngasimov.github.io/vue-scroll-between/)


## Installation

```
npm install vue-scroll-between --save
```

## Usage

```
import Vue from 'vue'
import ScrollBetween from 'vue-scroll-between'

Vue.use(ScrollBetween);
```

and inside Vue components

```
<template>
  <scroll-between-container id="app">
    ...
    <scroll-between :min="300" :max="1000" transition="fade">
      <p>This text will appear when scroll reach 300px and disapear when go over 1000px</p>
    <scroll-between>
  </scroll-between-container>
</template>
```


#### Attributes

| attribute     | type              | default       | description                                |
| ------------- | -------------     | ------------- | -------------                              |
| `min`         | Number            | null          | min height from top to activate the element|
| `max`         | Number            | null          | max height from top to activate the element|
| `transition`  | String            | 'fade-pop'    | Animation to perform                       |



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
