<template>
  <div class="home pt-4 pb-5">

    <section class="p-5">

        <h1 style="color:#2490d1;">FLEXIBILITY AND SERVICE</h1>
        <div class="row pl-4 pr-4">
               <h4 class="ml-3 p-5 text-left" ><b> Custom-made </b>- From advice about your conceptual plans till realisation and completion of your project. We take care for needs from A to Z. Together, we create a plan and manage the project till the final completion on site. Delivery according planning schedule and planting dates are hereby our main goals.</h4>

            <div class="col-6 text-left">
             
                <p class="pt-4 ml-3">With the following qualities of our organization we can suply you the best result</p>
                <ul>
                    <li class="m-0 p-0"><b> Flexibility </b>- we operate and think in a flexible perspective</li>
                    <li class="m-0 p-0"><b> Own production </b>- guaranteed quality</li>
                    <li class="m-0 p-0"><b> Focus on plants and cultivation </b>- the plants are central</li>
                    <li class="m-0 p-0"><b> Customer centric </b>- a solution that suits your needs</li>
                    <li class="m-0 p-0"><b> Service </b>- we are always there for you</li>
                </ul>
            </div>
            <div class="col-6 text-left">
                <p class="pt-4"><b> Always available </b> - We are 24/7 available. Outside office hours, please contact the sales team.</p>
            </div>
        </div>

    </section>


    <section >
        <div class="ml-3 " style="border-radius:35px;background-color:red" >
        <div class="row" >
          <div class="col-lg text-left pl-5" >
              <div class=" mr-5 pt-5 pr-5 pl-5 pb-4 mt-3">
                  <h1 class=" mb-5" style="color:white; font-weight:bolder;" > WOULD YOU LIKE TO KNOW MORE ABOUT Allico CONSTRUCTION?</h1>
                  <h4 class="mr-5  mt-4 text" style="color:white ;">WE LOOK FORWARD TO TELL YOU!</h4>
              </div>
            </div>
            <div class="col-lg " style=" text-align: center; color: black;">
              <img src="../assets/img/7.jpg" alt="" class=" " style="background-size:contain;  background-repeat: no-repeat; text-align: center;width:100%; ">
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
                    <h2 class="card-title m-3" style="color: white;">Air & Energy</h2>
                    <p class="card-text m-4" ><strong style="color: white;">The Climate Managemnet System</strong></p>
                </div>
            </div>
            </div>

            <div class="col no-overflow" >
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/3.jpg') + ')' }">
                <div class="card-body no-overflow p-4 pt-5" >
                    <h2 class="card-title m-3" style="color: white;  font-weight:bolder;">Total Greenhouse Project</h2>
                    <p class="card-text m-4" style="color: white;"><strong style="color: white;">Complete Project Solution From A till Z</strong></p>
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
  name: 'flexiblity-and-service',
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
