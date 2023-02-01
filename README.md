# My Postmaster test project

Postmaster is a vue project that gets a list of all the posts.

## Installation

Use the package manager npm to install Postmaster.

```
npm install
```

then

```
npm run serve
```

## Description

This is a simple project to show some basic Vue knowledge, i couldn't add everything i learned in the last 4 years working on Nuxt and i found it interesting to go back to Vue and see what Nuxt brings to the table. The project took me about 8h to finish without the unit tests ( I newer did them so i spent some time researching it and trying to add it to the project )

## Components that are made
1. Small Link
2. Link Line Component
3. Img Div
4. Fancy Cursor
5. Page Header

### 1. Small Link
It is used by simply sending the url as a String and passing the text in. I made it because
i needed the same thing on 2 places.

### 2. Link Line Component
It is used for displaying links, and it draws a underline when hovered. I used a simple Gsap to method to animate the line.

### 3. Img Div
It is used to display images with the ability to give it a custom proportion.

Options to pass:
- proportion: it is a number and it is multiplied by 100 ( 1 = 100% padding bottom which makes the image have a square proportion )
- alt: used to display the alt tag
- contain: gives the img a contain class and if false then the cover is added
- static: is a Boolean to show the img from a static folder only the name is needed ie. my-image.img
- absolute: is used to make the img fit the parent container

### 4. Fancy Cursor
It is a bit of flare i added and can be used by adding MouseObservable.js located in the observable folder, apart from that you will need to import MouseObservable in the app.vue file and adde it to the Vue.prototype, second thing is to add the "@mousemove='onMouseMove'" to the parent element. After that add the onMouseMove method that add's the necessary variables for the cursor to be able to follow the cursor. To use the hover option add some mouseenter or leave to a element and just change the reactive variable hovered which is located in the MouseObservable.js.