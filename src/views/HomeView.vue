<template>
  <Header></Header>
    <NavBar></NavBar>
  <main data-aos="fade-in" data-aos-delay="10000" data-aos-easing="ease-in">

<About></About>

  </main>

  <FooterVue></FooterVue>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import About from '@/components/About.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    NavBar,
    About,
    FooterVue
}
}
</script>

<style scoped>
main{
  margin-top: -20vh;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a1a1a1' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
background-color: #171717e1;
}

footer{
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a1a1a1' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #171717e1;
}
</style>