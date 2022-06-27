<template>
  <div class="home pt-4 pb-5">
    

    <h1 style="color:#2490d1; text-align: center;" class="p-4"><b> PRODUCT CATALOG </b></h1>

    <sectdion>
        <div class="row p-5">
            <div class="col-8 text-left">         
                <div class="row">
                    <div class="col-6">
              <img src="../assets/img/images.jpeg" alt="" class=" " style="background-size:contain;  background-repeat: no-repeat; text-align: center;width:100%; ">
                    </div>
                    <div class="col-6">
                <div>
                    <h1 style="color:#2490d1; " ><b> Request a Printed Catalog </b></h1>
                    <p class="mt-4">We've got your back! Our Product Catalogue is always up-to date with the most current pricing
on our greenhouse structures, packages and components. If you need help receiving it or would
like a printed copy of this guide, just click one link below for easy access online at any time. <br> <br> We know how important all information right at their fingertips having can be when they're
busy working away in there so make sure to check out what's new from us today by clicking
here!</p>
                    <!-- <h4><b class="mt-4">Here’s a look how to proceed with tax exempt status:</b></h4> -->
                </div>
                <hr>
                <b>Fill out the form below and get your catalog in the mail.</b>
                    </div>
                </div>
                <div class="row pl-5">

      <form class="p-5 "  @submit.prevent="submitForm">

        <!--  -->
        <div class="row text-left">
          <div class="col">
          <div class="form-group mt-3 mb-3">
            <!-- <label for="formGroupExampleInput" class="form-label">Username</label> -->
            <p class="form-label ml-3" style="color:#2490d1;"> <b> Name </b></p> 
            <div class="">
              <input
                type="text"
                class="form-control"
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
            <div class="">
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
            <div class="">
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
            <div class="">
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

        <div class="row">
            <div class="col">
                <p class="form-label ml-3" style="color:#2490d1;"> <b> City </b></p> 
                <div class="">
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Company Name"
                    v-model="City"
                />
                </div>
            </div>
            <div class="col">
                <p class="form-label" style="color:#2490d1;"> <strong> Application</strong></p> 
                <select class="form-control" aria-label="Default select example" v-model="this.Application">
                    <option value="Consumer">Cannabis Production</option>
                    <option value="Retailer">Commercial Growing</option>
                    <option value="Distributor">Growing Vegetables</option>
                    <option value="Affiliate">Hydroponics</option>
                    <option value="Referral Partner">Retail Center</option>
                </select>
            </div>
        </div>

        <div class="row mt-3  text-left">
            <div class="col-lg-12  ml-5">
            <p class="form-label ml-3" style="color:#2490d1;"> <b> Message </b></p> 
                <div class="form-group">
                    <textarea name="message" id="comments" required v-model="this.Message" rows="4" class="form-control" style="width:85%" placeholder="Your message..."></textarea>
                </div>
            </div>
        </div>
    


        <button type="submit" class="btn bt mt-5 ml-5 pl-5 pr-5 pt-2 pb-2" style="background-color:#2490d1; color:white">Send</button>



      </form>
                </div>

           </div>

            <div class="col-4">
              <div>
                <h1 style="color:#2490d1; ">MAILING ADDRESS</h1>
                <p>40 Londonderry Turnpike
                  Hooksett, NH 03106</p>
                <a href="" class="btn btn p-2 pl-3 pr-3" style="background-color:red; color: white"> Faqs</a>
              </div>
              

            </div>
        </div>
    </sectdion>

    <section >
        <div class="ml-3 " style="border-radius:35px; background-color:red" >
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
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/5.jpg') + ')' }">
                <div class="card-body no-overflow p-4 pt-5" >
                    <h2 class="card-title m-3" style="color: white;">Air & Energy</h2>
                    <p class="card-text m-4" ><strong style="color: white;">The Climate Managemnet System</strong></p>
                </div>
            </div>
            </div>

            <div class="col no-overflow" >
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/6.jpg') + ')' }">
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
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      Name: "",
      PhoneNumber:"",
      CompanyName: "",
      Message: "",
      City:"",
      Application:"",
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
          Email : this.Email,
          City: this.City,
          Application: this.Application
        };
        console.log(formData,approved)
        axios
          .post("/api/v1/CatelogRequest/", formData)
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
