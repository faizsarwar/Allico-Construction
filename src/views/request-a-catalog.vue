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
              <div class="p-3 card">
                <h1 style="color:#2490d1; ">MAILING ADDRESS</h1>
                <p>116 Bullevard, Prenceton</p>
                <!-- <a href="" class="btn btn p-2 pl-3 pr-3" style="background-color:red; color: white"> Faqs</a> -->
              </div>
              

            </div>
        </div>
    </sectdion>

    <section >
        <div class="ml-3 " style="border-radius:35px; background-color:red" >
        <div class="row" >
          <div class="col-lg text-left pl-5 " >
              <div class=" mr-5 pr-5 pl-5 pb-4 ">
                  <h1 class=" mb-5" style="color:white; font-weight:bolder;" > WOULD YOU LIKE TO KNOW MORE ABOUT ALLICO CONSTRUCTION?</h1>
                  <h4 class="mr-5  mt-4 text" style="color:white ;">WE LOOK FORWARD TO TELL YOU!</h4>
                                              <div class="text-center" >
                  <a href="/contact" class="btn bt mt-5 ml-5 pl-5 pr-5 pt-2 pb-2" style="background-color:#2490d1;border-radius:35px; color:white">Contact Us</a>
                    </div>
              </div>
            </div>
            <div class="col-lg " style=" text-align: center; color: black;">
              <img src="../assets/img/8.jpg" alt="" class=" " style="background-size:contain;  background-repeat: no-repeat; text-align: center;width:100%; ">
            </div>
        </div>
        </div>
    </section>

    <section class="p-5">
      <div class="p-5 card ">
      <h2> <b style="color:#2490d1;">We are available 24/7.</b> Outside office hours,
          please contact <b style="color:#2490d1;">our sales team</b></h2>
          <div class="text-center">
            <a href="/contact" class="btn btn p-2 pl-5 ml-5 mt-3 pr-3 " style="background-color:red; color: white; width:30%"> Contact Us</a>
          </div>

      </div>
    </section>


    <section>
        <div class=" mt-5 mb-4">
        <div class="row mt-4 mb-4 ml-2 mr-2">
         <div class="col no-overflow" >
           <a href="/air-energy">   
           <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/6.jpg') + ')' }">
            <div class="card-body no-overflow p-4 pt-5" >
              <h2 class="card-title m-3 mt-5" style="color: white;">Air & Energy</h2>
              <p class="card-text m-4" ><strong style="color: white;">The Climate Managemnet System</strong></p>

            </div>


          </div>
                      </a>
        </div>

            <div class="col no-overflow" >
              <a href="/products/greenhouse-construction">
            <div class="card cards collections"  :style="{ backgroundImage: 'url(' + require('@/assets/img/22.jpg') + ')' }">
                <div class="card-body no-overflow p-4 pt-5" >
                    <h2 class="card-title m-3 mt-5" style="color: white;  font-weight:bolder;">Total Greenhouse Project</h2>
                    <p class="card-text m-4" style="color: white;"><strong style="color: white;">Complete Project Solution From A till Z</strong></p>
                </div>
            </div>
            </a>
            </div>

        </div>
        </div>
    </section>

    <section style=" background-color: #2490d1;">
      <div class="row pt-2 pb-2">
        <div class="col-2 ">
  
        </div>
        <div class="pt-4 text-left col-4 pb-5">
            <h1 class=" mb-5 " style="color:white; font-weight:bolder;" >ALLICO SYSTEMS CONSTRUCTION</h1>
            <p class="mt-5" style="color:white; font-weight:bolder;">WELCOME TO ALLICO CONSTRUCTION. WE REALISE COMPLETE HORTICULTURAL PROJECTS WORLDWIDE. THE COMBINATION OF OUR SERVICE AND OUR PRODUCTS ENSURES THAT WE CAN OFFER YOU A COMPLETE PACKAGE.</p>
            <p class="mt-5" style="color:white; font-weight:bolder;">YOU CAN ALSO CONTACT US WITH ALL YOUR QUESTIONS AND FOR MORE INFORMATION ABOUT OUR PROJECTS.</p>
            <h3 style="color:white;" class="mt-5 ">FOLLOW US</h3>
            <div class="mt-4 row ml-2">

              <div class="col-sm-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </div>

              <div class="col-sm-1 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="white" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </div>

              <div class="col-sm-1 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </div>

            </div>

        </div>
          <div class="col-6 ">
            <div class="row pt-5 pl-5 ml-3">
          <!-- Grid column -->
          <div class="col-md-4 text-left">
            <!-- Links -->
            <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-4"
              style="color: white"
            >
              About ALLICO
            </h5>

            <ul class="" style="color:white">
              <li>
                <a href="/about/about-us" >About Us</a>
              </li>
              <li>
                <a href="/contact" >Contact Us</a>
              </li>
              <li>
                <a href="/request-a-catalog" >Request Catalog</a>
              </li>
              <li>
                <a href="/tax-exemption" >Tax Exemption</a>
              </li>
            </ul>
          </div>

                    <!-- Grid column -->
          <div class="col-lg-6 text-left ">
            <!-- Links -->
            <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-4"
              style="color: white"
            >
              Products
            </h5>

            <ul class="" style="color:white">
              <li>
                <a href="/products/complete-projects" >Complete Projects</a>
              </li>
              <li>
                <a href="/products/greenhouse-construction" >Greenhouse Construction</a>
              </li>
              <li>
                <a href="/products/screening" >Screening</a>
              </li>
              <li>
                <a href="/products/climate" >Climate</a>
              </li>
            </ul>
          </div>


          

            </div>

                            <!-- Grid column -->
          <div class="row  text-left" style="color:white;">
            <!-- Links -->
            <div class="ml-4">

            <h3 class="mt-3 mb-4 ml-4">Subscribe to our newsletter</h3>

            <h5 class="mt-3 mb-4 ml-4 pr-4">Learn about our latest events, resources,
            programs, and more!</h5>

            </div>


            <form action="">        
              <div class="row ml-4">
                  <div class="form-group col-md-6 ml-2">
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                  </div>
                <button type="submit" class="btn btn-danger ml-4" style="height:40px">Submit</button>
                            <sub class="ml-4">By subscribing you agree with our Terms of Use & Privacy Policy.</sub>
              </div>
            </form>

            <p class="mt-4 mb-4 ml-5 pr-4" style="color:white"> 116 Bullevard, Prenceton <br>
                 +1 (609) 375-0046</p>

          </div>

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
