<template>
  <div class="home pt-4 pb-5">


    <section class="p-5 text-left">
        <h1 class="m-3 ml-4 mb-5" style="color:#2490d1;"> <b> SCREENING </b> </h1>
        <div class="row pl-4 pr-4">
            <h4 class="pl-4 pr-4">We offer a wide range of options to suit your needs and climate. Screen installations can be
installed for increased efficiency, such as regulating different parameters like moisture balance
or CO2 content without affecting temperature levels in the greenhouse! Summer may not last
forever but at least you have those beautiful plants all year-round thanks to our high-quality
screens.</h4>
        </div>

        <div class="row pl-4 pr-4 mt-5">
            <h2 class="pl-4" style="color:#2490d1;">SCREENING INSTALLATIONS: A RANGE OF POSSIBILITIES</h2>
            <h4 class="pl-4 mt-3" >We offer a wide range of services to meet your specific needs.</h4>
            <ul>
                <li><b> Horizontal screens </b>Having a lighting system that can be adjusted to suit your needs and crop is crucial for getting
the most out of them. The options within this category will help you save energy, contain
assimilation lighting so it doesn't shine on other plants in an area instead just warming up soil
but also reducing solar reflection which makes hot spots more comfortable during summer
months when temperatures soar.</li>
                <li><b> Gable screens </b>This is a perfect way to provide the right amount of light for your home. This will save energy
and help keep you cozy all winter long.</li>
                <li><b> Twin gable </b>The use of this system will allow you to separate the greenhouse into different compartments
or create climates that are more specific.</li>
                <li><b> Insect netting </b>Managing disease pressure and preventing bugs from entering your greenhouse is important
for keeping healthy crops. You should keep beneficial insects like bees or bumblebees inside,
but you don't want pests like thrips and aphids coming in too. <br> 
Choosing the right cloth for your crop is important, because it will depend on seasonal climate
conditions and type of cultivation. We can help you with this decision</li>
            </ul>
            <h4 class="pl-4 pr-4 mt-3">An important component of the screening installation is the type of cloth. We can advise you in choosing the right cloth type for your crop, based on the (seasonal) climate conditions, type of cultivation and your specific situation.
 </h4>
        </div>
    </section>


    <section >
        <div class="ml-3 " style="border-radius:35px; background-color:red " >
        <div class="row" >
          <div class="col-lg text-left pl-5" >
              <div class=" mr-5 pt-5 pr-5 pl-5 pb-4 mt-3">
                  <h1 class=" mb-5" style="color:white; font-weight:bolder;" >ARE YOU CURIOUS TO DISCOVER THE BENEFITS OF A SCREENING INSTALLATION?</h1>
                  <h4 class="mr-5  mt-4 text" style="color:white ;">CONTACT US TO LEARN MORE</h4>
              </div>
            </div>
            <div class="col-lg " style=" text-align: center; color: black;">
              <img src="../assets/img/4.jpg" alt="" class=" " style="background-size:contain;  background-repeat: no-repeat; text-align: center;width:100%; ">
            </div>
        </div>
        </div>
    </section>

    <section class="p-5">
      <div class="p-5">
      <h2> <b style="color:#2490d1;">We are available 24/7.</b> Outside office hours,
          please contact <b style="color:#2490d1;">our sales team</b></h2>
      </div>
    </section>


    <section>
        <div class=" mt-5 mb-4">
        <div class="row mt-4 mb-4 ml-2 mr-2">
            <div class="col no-overflow" >
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/12.jpg') + ')' }">
                <div class="card-body no-overflow p-4 pt-5" >
                    <h2 class="card-title m-3" style="color: white;">Greenhouse Construction</h2>
                    <p class="card-text m-4" ><strong style="color: white;">Discover The Possibilities Service We Offer</strong></p>
                </div>
            </div>
            </div>

            <div class="col no-overflow" >
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/14.jpg') + ')' }">
                <div class="card-body no-overflow p-4 pt-5" >
                    <h2 class="card-title m-3" style="color: white;  font-weight:bolder;">Climate</h2>
                    <p class="card-text m-4" style="color: white;"><strong style="color: white;">The Best Climate For Youre Green House</strong></p>
                </div>
            </div>
            </div>

        </div>
        </div>
    </section>

    <section style=" background-color: #2490d1;">
      <div class="row pt-2 pb-2">
        <div class="col-2 ">
  
        </div>
        <div class="pt-4 text-left col-4 pb-5">
            <h1 class=" mb-5 " style="color:white; font-weight:bolder;" >ABOUT ALLICO SYSTEMS CONSTRUCTION </h1>
            <p class="mt-5" style="color:white; font-weight:bolder;">WELCOME TO ALLICO CONSTRUCTION. WE REALISE COMPLETE HORTICULTURAL PROJECTS WORLDWIDE. THE COMBINATION OF OUR SERVICE AND OUR PRODUCTS ENSURES THAT WE CAN OFFER YOU A COMPLETE PACKAGE.</p>
            <p class="mt-5" style="color:white; font-weight:bolder;">YOU CAN ALSO CONTACT US WITH ALL YOUR QUESTIONS AND FOR MORE INFORMATION ABOUT OUR PROJECTS.</p>
            <h3 style="color:white;" class="mt-5">FOLLOW US</h3>
        </div>
          <div class="col-6 ">
  
        </div>
  
      </div>
    </section>





  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/blogs.vue'
// import best_seller_slides from '../components/best-seller-slides.vue'
// import testemonials from '../components/testemonials.vue'
// import Faqs from '../components/Faqs.vue'
// import compare_course from '../components/compare-course.vue'
// import explore_more_topics from '../components/explore-more-topics.vue'

export default {
  name: 'screening-projects',
  components: {
    // HelloWorld
    // blogs,
    // testemonials,
    // compare_course,
    // explore_more_topics,
    // Faqs,
    // best_seller_slides
  }
}
</script>

<style scoped>
.collections{
  background-size: cover;  
  background-repeat: no-repeat;
  height: 270px;
  overflow-y:hidden ;
}

.no-overflow{
  overflow-x:hidden;
  overflow-y:hidden;
}

.card-body .col {
    overflow-y:hidden !important;
    overflow-x:hidden !important;
}

.card-body{
  height: 280px
}

p a b,label{
  color:#211ea6
}

.circular-square { border-top-left-radius: 50% 50%; border-top-right-radius: 50% 50%; border-bottom-right-radius: 50% 50%; border-bottom-left-radius: 50% 50%; }

li{
  margin-top: 20px;
  margin-bottom: 20px;

}
</style>
