<template>
  <div class="home pt-4 pb-5">


    <section class="p-5">

      <h2 class="font-weight-bold text-uppercase" style="color:#2490d1;">Contact Form </h2>




      <form class="p-5 "  @submit.prevent="submitForm">

        <!--  -->
        <div class="row text-left">
          <div class="col">
          <div class="form-group mt-3 mb-3">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label ml-3" style="color:#2490d1;"> <b> Name </b></p> 
            <div class="pr-3">
              <input
                type="text"
                class="form-control pr-3"
                id="formGroupExampleInput"
                placeholder="Enter Your Name"
                v-model="Name"
              />
            </div>
          </div>

          </div>
          <div class="col">
          <div class="form-group mt-3 mb-3">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label ml-3"  style="color:#2490d1;"> <b> Phone Number </b></p> 
            <div class="pr-3">
              <input
                type="text"
                class="form-control "
                id="formGroupExampleInput"
                placeholder="Enter Phone Number"
                v-model="PhoneNumber"
              />
            </div>
          </div>

          </div>
        </div>
        <!--  -->


       <!--  -->
        <div class="row text-left">
          <div class="col">
          <div class="form-group mt-3 mb-3">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label ml-3" style="color:#2490d1;"> <b> Email </b></p> 
            <div class="pr-3">
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter email"
                v-model="Email"
              />
            </div>
          </div>

          </div>
          <div class="col">
          <div class="form-group mt-3 mb-3">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label ml-3" style="color:#2490d1;"> <b> Company Name </b></p> 
            <div class="pr-3">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Company Name"
                v-model="CompanyName"
              />
            </div>
          </div>

          </div>
 
        </div>

        <div class="row mt-3 pl-5 text-left">
            <div class="col-lg-12 pl-5 ml-5">
            <p class="form-label ml-3" style="color:#2490d1;"> <b> Message </b></p> 
                <div class="form-group">
                    <textarea name="message" id="comments" required  rows="4" class="form-control" v-model="Message" style="width:70%" placeholder="Your message..."></textarea>
                </div>
            </div>
        </div>
    


        <button type="submit" class="btn bt mt-5 pl-5 pr-5 pt-2 pb-2" style="background-color:#2490d1; color:white">Send</button>



      </form>
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
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/1.jpg') + ')' }">
                <div class="card-body no-overflow p-4 pt-5" >
                    <h2 class="card-title m-3" style="color: white;">Greenhouse Construction</h2>
                    <p class="card-text m-4" ><strong style="color: white;">Discover The Possibilities Service We Offer</strong></p>
                </div>
            </div>
            </div>

            <div class="col no-overflow" >
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/4.jpg') + ')' }">
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
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      Name: "",
      PhoneNumber:"",
      CompanyName: "",
      Message: "",
      Email:"",
      errors: [],
    };
  },
  methods: {
    submitForm() {
      this.errors = [];
      if (!this.errors.length) {
        let approved;
        if (this.account_type== 'Consumer'){
          approved = true
        }else{
          approved = false
        }
        const formData = {
          Name: this.Name,
          PhoneNumber: this.PhoneNumber,
          CompanyName: this.CompanyName,
          Message: this.Message,
          Email : this.Email
        };
        console.log(formData,approved)
        axios
          .post("/api/v1/ContactForm/", formData)
          .then((response) => {
            console.log(response)
            this.$router.push("/");
          })
          .catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}: ${error.response.data[property]}`
                );
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");
              console.log(JSON.stringify(error));
            }
          });
      }
    },
  },
};
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
