# website_template

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

### Install AOS
```
node -v
npm install aos --save
```
Add CSS & JS LINKS to index.html file
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```
IMPORT AOS TO main.js file
import AOS from 'aos'
import 'aos/dist/aos.css'
```
INITIALIZE AOS INTO YOUR main.js file
export const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone" });

app.use(AOS).use(store).use(router).mount('#app')
```
data-aos="" animations that can be used...
- Fade animations:
fade
fade-up
fade-down
fade-left
fade-right
fade-up-right
fade-up-left
fade-down-right
fade-down-left

- Flip animations:
flip-up
flip-down
flip-left
flip-right

- Slide animations:
slide-up
slide-down
slide-left
slide-right

- Zoom animations:
zoom-in
zoom-in-up
zoom-in-down
zoom-in-left
zoom-in-right
zoom-out
zoom-out-up
zoom-out-down
zoom-out-left
zoom-out-right

- Anchor placements:
top-bottom
top-center
top-top
center-bottom
center-center
center-top
bottom-bottom
bottom-center
bottom-top

- Easing functions:
linear
ease
ease-in
ease-out
ease-in-out
ease-in-back
ease-out-back
ease-in-out-back
ease-in-sine
ease-out-sine
ease-in-out-sine
ease-in-quad
ease-out-quad
ease-in-out-quad
ease-in-cubic
ease-out-cubic
ease-in-out-cubic
ease-in-quart
ease-out-quart
ease-in-out-quart

how to use example:
<div class="displayBox" data-aos="zoom-in">
  <p>Animated element using zoom-in.</p>
</div>
```
more aos examples
https://egghead.io/blog/how-to-use-the-animate-on-scroll-aos-library-in-vue
```