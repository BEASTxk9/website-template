<template>
    <header>

        <section id="header_bg_img" class="fixed-top" data-aos="fade-in" defer>
        </section>
        
            <section id="content">          
                  <div class="container displayBox" data-aos="zoom-in" data-aos-delay="500">
                    <div class="row justify-content-center">
                        <div class="col-sm-12">
                            <h1>Shane Stevens</h1>
                            <h2>I am an Aspiring Fullstack Web Developer & Designer!</h2>
                            <h3>DEDICATED | DISCIPLINED | DIFFERENT</h3>

                            <button>
                                GLITCH
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
   }

#content h1{
    margin-bottom: -1vh;
    font-size: 10rem;
}
#content h2{
    font-size: 2rem;
}
#content h3{
    padding: 10px;
    font-size: 1rem;
}





/* scroll down button */
button{
border: 3px solid transparent;
}

button,button::after {
    padding: 10px 50px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    position: relative;
  }
  
  button::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    clip-path: var(--move1);
    content: 'GLITCH';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }
  
  button:hover::after {
    animation: glitch_4011 1s;
    text-shadow: 10 10px 10px black;
    animation-timing-function: steps(2, end);
    text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #E94BE8;
    background-color: transparent;
    border: 3px solid rgb(0, 255, 213);
  }
  
  button:hover {
    text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #E94BE8;
  }
  
  button:hover {
    background-color: transparent;
    border: 1px solid rgb(0, 255, 213);
    box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
  }
  
  @keyframes glitch_4011 {
    0% {
      clip-path: var(--move1);
      transform: translate(0px,-10px);
    }
  
    10% {
      clip-path: var(--move2);
      transform: translate(-10px,10px);
    }
  
    20% {
      clip-path: var(--move3);
      transform: translate(10px,0px);
    }
  
    30% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }
  
    40% {
      clip-path: var(--move5);
      transform: translate(10px,-10px);
    }
  
    50% {
      clip-path: var(--move6);
      transform: translate(-10px,10px);
    }
  
    60% {
      clip-path: var(--move1);
      transform: translate(10px,-10px);
    }
  
    70% {
      clip-path: var(--move3);
      transform: translate(-10px,10px);
    }
  
    80% {
      clip-path: var(--move2);
      transform: translate(10px,-10px);
    }
  
    90% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }
  
    100% {
      clip-path: var(--move1);
      transform: translate(0);
    }
  }

</style>