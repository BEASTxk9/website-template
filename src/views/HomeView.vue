<template>
  <Header></Header>
  <main data-aos="fade-in" data-aos-delay="10000" data-aos-easing="ease-in">
    <section>
      <h1>Hello</h1>
    </section>
  </main>

</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue';

export default {
  name: 'HomeView',
  components: {
    Header
}
}
</script>

<style>
main{
  background-color: rgba(255, 255, 255, 0.664);
}
</style>