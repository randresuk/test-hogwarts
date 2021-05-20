# test-hogwarts by [ANDRÉS URREGO]

## Description Problem

This site is designed to be able to identify users who
They belong to the database of the client MSE (Magician School Educations).

## Description map app

The application is built under the MVVM model, the programming is reactive and based on components, taking into account the above, you will find in the http folder the configuration and consumption necessary for the APIs encapsulated and organized by the principle of single responsibility, the URL's must be saved on the .env file globally, in the SRC directory you will find the assets such as images, fonts and global styles using SASS and SASS loader for general configuration, in the common directory constants have been included, in the components directory you will find the files .vue organized by priority of consumption, in the lib directory you will find useful methods, the core of logic is included within the .vue with a script based on vue practices; mixin is not included as the complexity of the application does not require it.

## Use

It consists of a main view that shows the meaning of the site, when scrolling it shows the four houses that make up the Hogwarts school, by default all the users that make up the database are listed, when clicking on the image of a house it is They list the users that only belong to that house, it has a selector to organize by name or surname the list of users that is presented.


## Requirements
NODE JS
NPM

## Technologies

✨Framework✨
- VUE JS
✨Code lenguage✨
- JS
✨Preprocessor CSS✨
- SASS
- SASS loader
- Boostrap
- Boostrap VUE
✨Methodoloy CSS✨
- BEM
✨Package manager✨
- npm
✨Code versioner✨
- Git
✨Repository✨
- Github
✨Libraries✨
- popper.js
- vue-fragment
- nuxtjs/axios
- core-js
- visit the package.json

## visit the site previously
preferably deploy local, since it is deployed in github pages and I block the URL of the REST API and the fonts-harry-potter, as "TODO" you can search another server. https://randresuk.github.io/test-hogwarts/

## Install and deploy

## Download or clone 

https://github.com/randresuk/test-hogwarts.git

branch: master

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


