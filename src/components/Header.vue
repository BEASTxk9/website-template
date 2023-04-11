<template>
    <header>

        <section id="header_bg_img" class="fixed-top" data-aos="fade-in" defer>     
        </section>  

            <section id="content">          
                  <div class="container displayBox" data-aos="zoom-in" data-aos-delay="500">
                    <div class="row justify-content-center">
                        <div class="col-sm-12">
                            <h1>Shane Stevens</h1>
                            <h2>Aspiring Fullstack Web Developer & Designer!</h2>
                            <h3>DEDICATED | DISCIPLINED | DIFFERENT</h3>
                         
                            <button class="mouse" scr="#about">
                                <div class="scroll">
                                </div>
                              </button>

                        </div>
     

                    </div>
                </div>


            </section>

    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>

header{
    overflow-x: hidden;
}

   #header_bg_img{
    background-color: #171717;
 background-image: url('https://i.postimg.cc/hjr9mS1J/pxfuel.webp');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -5000 !important;
   } 


   #content{
	display: grid;
	place-items: center;
    color: white;
    font-weight: bold;
    font-family: robot mono, raleway;
    transition: all 0.3s ease-in-out;
   }

#content h1{
    margin-bottom: -1vh;
    font-size: 10rem;
    transition: all 0.3s ease-in-out;
}
#content h2{
    font-size: 2.3rem;
    transition: all 0.3s ease-in-out;
}
#content h3{
    padding: 10px;
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
}
@media only screen and (max-width: 992px){
  #content h1{
    font-size: 7rem;
}
#content h2{
    font-size: 2rem;
}
#content h3{
    font-size: 1rem;
}
}
@media only screen and (max-width: 768px){
  #content h1{
    font-size: 5rem;
}
#content h2{
    font-size: 1.5rem;
}
#content h3{
    font-size: 0.8rem;
}
}
@media only screen and (max-width: 489px){
  #content h1{
    font-size: 3.5rem;
}
#content h2{
    font-size: 1rem;
}
#content h3{
  padding: 0;
    font-size: 0.8rem;
}
}
@media only screen and (max-width: 351px){
  #content h1{
    font-size: 2.6rem;
    padding-bottom: 5px;
}
#content h2{
    font-size: 0.9rem;
}
#content h3{
  padding: 0;
    font-size: 0.7rem;
}
}

/* scroll down button */
.mouse {
    width: 25px;
    height: 40px;
    border: 1px solid rgb(196, 196, 196);
    background-color: transparent;
    border-radius: 13px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 50%;
    right: 50%;
    margin-top: 10px;
  }
  
  .scroll {
    width: 3px;
    height: 10px;
    background-color: rgb(196, 196, 196);
    border-radius: 2px;
    position: absolute;
    bottom: 9px;
    animation: move_918 1.5s linear infinite;
  }
  
  @keyframes move_918 {
    0% {
      bottom: 9px;
    }
  
    50% {
      bottom: 5px;
    }
  
    100% {
      bottom: 9px;
    }
  }

</style>