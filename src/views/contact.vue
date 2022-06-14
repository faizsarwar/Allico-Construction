<template>
  <div class="home pt-4 pb-5">


  
    <section class="parallax parallax-box section" id="contact">
        <div class="parallax-content">
            <h1 class="mt-3 mb-0" style="color:#2490d1;"><b>Contact Form</b></h1>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center mb-4 z-index-9">
                            <br />
                            <h2 class="text-white">Book Demo</h2>
                            <p class=" text-white ">Please fill the following details, our staff
                                will be in touch with you soon.</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-12 mx-auto">
                        <div class="mt-4 contact_form wow fadeIn" data-wow-duration="1500ms">
                            <p id="status_br"></p>
                            <form id="contact" action="http://localhost:8000/api/v1/info/" method="post">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group" >
                                            <input name="companyname" id="companyname"  required  type="text" class="form-control" placeholder="Company Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="last_name" id="lastname" required  type="text" class="form-control" placeholder="Last Name">
                                        </div>
                                    </div>
                                </div>
								<div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="email" id="email" required type="email" class="form-control" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="Phone_number" id="phone" required  type="text" class="form-control" placeholder="Phone Number">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea name="message" id="comments" required  rows="4" class="form-control" placeholder="Your message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 text-center">
                                        <input type="submit" class="btn btn-gradient text-white w-100 text-uppercase" id="submit_q" value="Submit">
                                    </div>
                                </div>
                                   <button type="submit" class="btn btn-primary">send</button>
                            </form>

                            <!--[if lte IE 8]>
<script charset="utf-8"  src="//js.hsforms.net/forms/v2-legacy.js"></script>
<![endif]-->
                            <!-- <script src="//js.hsforms.net/forms/v2.js"></script>
                            <script>
                                hbspt.forms.create({
                                    portalId: "14513272",
                                    formId: "d9322292-e2e8-4ece-b3fd-3af2de0f047c"
                                });
                            </script> -->
                        </div>
                    </div>
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
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/2.png') + ')' }">
                <div class="card-body no-overflow p-4 pt-5" >
                    <h2 class="card-title m-3" style="color: white;">Greenhouse Construction</h2>
                    <p class="card-text m-4" ><strong style="color: white;">Discover The Possibilities Service We Offer</strong></p>
                </div>
            </div>
            </div>

            <div class="col no-overflow" >
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/2.png') + ')' }">
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
