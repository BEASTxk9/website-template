<template>
    <section>
        <div class="container">
            <div class="row">
                <h1>ABOUT ME!</h1>
                <!-- img -->
                <div class="col-lg-5 col-sm-12">
                    <img id="ss-img" class="rounded-pill" src="https://i.postimg.cc/CK842sMg/me3-removebg.png" alt="img of shane stevens">
                </div>
                <!-- text -->
                <div id="about-me" class="col-lg-7 col-sm-12 mt-4 pt-4 text-start">
                    <p>Hi there, My name is Shane Stevens. I grew up in Cape Town, Plumstead.
                        In my schooling years I attended Heathfield Primary and Heathfield High school.
                        During that time I was very active when it came to their extra curriculum activities . A few
                        examples of those activities are Heathfield High Schools annual 24 hour marathon and A-section which
                        is an inter school event used to select Western Province young athletes.<br> <br>
                         I matriculated in 2021 and
                        I started studying Web Development in 2022 at Life choices Academy. During my time at life choices I
                        not only learnt about coding but I learnt that my strongest trait is problem solving. I am hard
                        working, self driving and resilient because I enjoy what I do.</p>

                        <div class="row">
                            <!-- left -->
                            <div class="col-sm-4">
                              <p>Country: South Africa</p>
                              <p>City: Cape Town</p>
                            </div>
                            <!-- center -->
                            <div class="col-sm-4">
                              <p>Birth: 05/03/2003</p>
                              <p>Criminal Record: None</p>
                            </div>
                            <!-- right -->
                            <div class="col-sm-4">
                              <p>Home language: English</p>
                              <p>Second language: Afrikaans</p>
                            </div>
                          </div>

                          <div class="row pt-5 mt-5">
                            <button> Button
                            </button>
                          </div>
        
                </div>

      
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
    font-weight: bold;
}

#about-me{
    font-size: 1.25rem;
}

#ss-img{
    -webkit-filter: grayscale(90%); /* Safari 6.0 - 9.0 */
    filter: grayscale(80%);
    width: 90%;
}

/*
button
*/
button {
  width: 140px;
  height: 45px;
  font-size: 23px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
 }
 
 button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: white;
  z-index: -1;
  transition: all 0.5s;
 }
 
 button:hover::before {
  width: 100%;
 }
 
 button:hover {
  color: black;
 }
 
 button:active:before {
  background: #b9b9b9;
 }
</style>