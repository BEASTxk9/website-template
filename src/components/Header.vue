<template>
<section id="header_bg_img" class="fixed-top" data-aos="fade-in" >
</section>
<section id="header_bg_img_overlay" class="fixed-top" data-aos="fade-out" data-aos-duration="5000" data-aos-easing="ease-in-out">
</section>

    <section>
        <div class="displayBox" data-aos="zoom-in" data-aos-delay="500">
            <p>Animated element using zoom-in.</p>
          </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   #header_bg_img{
    background-image: url('https://i.postimg.cc/ryBzPRbW/5cffeaf7b3cb0ed2d33f7943-hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -5000 !important;
   } 
   #header_bg_img_overlay{
    background-image: url('https://i.postimg.cc/kGKMmwZS/5d13364599bb70e3560cc4e5-background-min-3.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -5000 !important;
   } 
</style>