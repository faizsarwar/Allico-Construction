<template>
  <div style="min-height:100vh; display:flex; flex-direction:column; 
            justify-content:space-between;" class="p-0 m-0">

      <!-- <div style="background-color: #2490d1" class="">
        
        <div class="col-12 mt-3 mb-2 ">
          <div class="row ml-1">

            <div class="col-1 mr-2">
              <img class="ml-5 mt-2 mr-0" src="./assets/img/icon1.jpg" alt="" style="width:55px;border-radius:10px">
            </div>
            <div class="col-10 ml-4" >
              <div class="row mt-2 mb-2 ml-2">
                <strong style="color:white !important"> Happy Financial Litracy Month! </strong>
              </div>
              <div class="row mt-2 mb-2 ml-2">
                <p style="color:white !important"> Sign up for our free investing course today and kikstart your financial future.PLUS get $5 in a starter investing account </p>
              </div>
            </div>
          </div>

        </div>
      </div> -->


<nav class="navbar navbar-expand-lg  p-0  navbar-light mt-0 mb-0" id="navbar_top" style="background-color:white; color:#2490d1">
            <a href="/">
            <img
              src="./assets/img/newlogo.png"
              alt=""
              srcset=""
              style="height: 90px"
              class=" header-img mr-5 "
          /></a>
  <button class="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse p-0 " id="navbarNavDropdown" style="color:#2490d1">

    <ul class="navbar-nav ml-auto">

      <li class="nav-item mr-3 ml-3 mr-2 ">
        <a class="" style="color:#2490d1" href="/">Home</a>
      </li>
      <li class="nav-item mr-3 ml-3 mr-2 ">
        <a class="" style="color:#2490d1" href="/about/about-us">About Us</a>
      </li>
      <!-- <li class="nav-item ml-2 mr-3 dropdown" >
        <a class="" style="color:#2490d1;" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </a>
        <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/about/about-us"><strong>About US</strong> </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/about/flexibility-and-service"><strong>Flexibility And Service </strong> </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/about/central-quality"><strong>Quality</strong>  </a>
        </div>
      </li> -->
      <li class="nav-item mr-3 ml-3  dropdown" >
        <a class=" " style="color:#2490d1; " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/products/complete-projects"><strong>Complete Projects</strong>  </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/products/greenhouse-construction"><strong>Green House Construction</strong>  </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/products/screening"><strong>Screening</strong></a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/products/climate"><strong>Climate</strong></a>
        </div>
      </li>
      <li class="nav-item mr-3 ml-3 mr-2 ">
        <a class="" style="color:#2490d1" href="/air-energy">Air & Energy</a>
      </li>
      <!-- <li class="nav-item mr-3 ml-3 mr-2 ">
        <a class="" style="color:#2490d1" href="/how-it-works">Projects</a>
      </li> -->
      <li class="nav-item ml-3 mr-3 dropdown">
        <a class=" " style="color:#2490d1" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Customer Service
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/contact"> <strong>Contact</strong> </a>
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/tax-exemption"> <strong>Tax Exemption</strong> </a>
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/shipping-information"> <strong>Shipping Info</strong> </a>
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/shipping-information"> <strong>Construction tips</strong> </a>
          <a class="dropdown-item mb-4 ml-2 mr-2" href="/request-a-catalog"><strong>Request A Catalog</strong> </a>
        </div>
      </li>
      <li class="nav-item mr-3 ml-3 mr-2 ">
        <a class="" style="color:#2490d1" href="/work-at">Work at</a>
      </li>
    </ul>
    

  </div>
</nav>


    <section style="overflow-x:hidden" class="body-tag">
      <router-view />
    </section>


  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
// import axios from 'axios'
export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },

}


document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});

</script>






<style lang="scss">
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .navbar{
    display:none;
  }  
}
@media only screen and (max-width: 550px) {
  .product-img{
    height:250px; 
    width: 200px;
  }
}
/* max 1250 or less */
@media only screen and (max-width: 1250px) {
  // .card-text{
  //   display:none;
  // }
}
@media only screen and (max-width: 770px) {
  .product-img{
    height:300px; 
    width: 250px;
  }
}
/* max 800px or less */
@media only screen and (max-width: 800px) {
  .no-overflow{
    display:none;
  }
  .cards-heading{
    display:none;
  }
}
// header-img
/* max 1150px or less */
@media only screen and (max-width: 1250px) {
  .header-img{
    display:none;
  }
  .product-img{
    height:400px; 
    width: 350px;
  }
}
@media only screen and (min-width:1250px){
  .product-img{
    height:600px; 
    width: 550px;
  }
}
////
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 999px) {

.card-img-top{
  height: 260px !important;
}
}
.body-tag{
  overflow-x:hidden
}
.product-img{
  overflow-y:hidden;
  overflow-x:hidden
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
.heading {
    font-weight: 300;
    display: inline-block;
    padding-bottom: 5px;
    position: relative;
    
}
.heading:before{
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border-bottom: 3px solid red;
}
.center_elements{
    display: flex; justify-content: center; text-align: center;
}
.swal2-icon{
  overflow-y: hidden;
}
.navigation {
    position: fixed;
    width: 100%;
    overflow: hidden;
    left: 0;
    top: 0;
    bottom: 0;
    border-top: 0;
    transition: 0.3s;
}

#app {
  font-family: Minion;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.swal2-icon .swal2-success .swal2-icon-show{
  overflow-y: hidden;
  overflow-x:hidden
}
li a{
    color: white;
    text-decoration:none;
}
.no-underline{
      text-decoration:none !important;
}
.categories li a {
    color: #466D1d;
    text-decoration:none;
    font-weight: bolder;
}
.card-image{
    height: 300px;
}
.cards{
    height: 280px;
}
      .card{
        overflow-y:hidden;
      }
      .cards{
        overflow-y:hidden;
      }
      .card-body{
        overflow-y:hidden;
      }
      .no-overflow{
        overflow-y:hidden;
      }
.card{
    border-radius: 4px;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
    background-color: white;
}

.navbar strong {
  color:#2490d1
}

.navbar p {
  color:#211ea6
}


.col-md-4 {
    overflow-y: hidden;
}
.card:hover{
    transform: scale(1.05);
 box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
   text-decoration: none;
}
@media(max-width: 990px){
    .card{
      margin: 20px;
    }
  } 
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
a {
  text-decoration: none !important;
}
a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.a-exact-active {
      color: #42b983;
    }
  }
}

// adding responsive tags
      @media (max-width: 992px) {
        .section-title {
          font-size: 3rem;
        }
      }
      @media (max-width: 561px) {
        .section-title {
          font-size: 2rem;
        }
        .card-img-top{
          height: 200px
        }
      }
      @media (max-width: 270px) {
        .flexDirectionColAt270 {
          flex-direction: column;
        }
        .card-img-top{
          height: 150px
        }
      }
      .icon {
        font-size: 30px;
        margin-right: 20px;
      }
      @media (max-width: 1326px) {
        html {
          font-size: 100%;
        }
      }
      @media (max-width: 1200px) {
        html {
          font-size: 95%;
        }
      }
      @media (max-width: 1100px) {
        html {
          font-size: 90%;
        }
      }
      #footer {
            position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/ 
            /* height: 40px;
            background: grey; */
        }
      @media (max-width: 1000px) {
        html {
          font-size: 85%;
        }
        .card-img-top{
          height: 300px
        }
      }
      @media (max-width: 900px) {
        html {
          font-size: 80%;
        }
        .card-img-top{
          height: 300px
        }
      }
      @media (max-width: 770px) {
        html {
          font-size: 75%;
        }
        .card-img-top{
          height: 270px
        }
      }
      @media (max-width: 680px) {
        html {
          font-size: 70%;
        }
        .card-img-top{
          height: 200px
        }
      }
      @media (max-width: 600px) {
        html {
          font-size: 65%;
        }
        .card-img-top{
          height: 200px
        }
        .protocol-img{
          height:50%
        }
      }

      // h1 b,h2 b,h3 b,h4 b{
      //   color:#261159;
      // }


      
      @media (max-width: 530px) {
        html {
          font-size: 60%;
        }
        .card-img-top{
          height: 180px
        }
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 350px) {
        html {
          font-size: 55%;
        }
        .card-img-top{
          height: 150px
        }
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 250px) {
        html {
          font-size: 50%;
        }
        .card-img-top{
          height: 150px
        }
        
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 230px) {
        html {
          font-size: 45%;
        }
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 210px) {
        html {
          font-size: 40%;
        }
        .card-img-top{
          height: 150px
        }
        .protocol-img{
          height:50%
        }
      }

.set-color{
  color:#2490d1
}

.text{
  text-align: justify;
  text-justify: inter-word;
  }

    @media (min-width: 768px) { 
    .dropdown:hover .dropdown-menu {
        display: block;
        margin-top: 0; 
    }
    }
    @media (max-width: 767px) { 
    .dropdown:hover .dropdown-menu{
        display: none;
        margin-top: auto; 
    }
    }


.navbar li {
   font-family: "Times New Roman", Times, serif;
    position: relative;
    text-decoration: none;
    font-weight: 100;
    color: #2490d1;
    transition: all .25s ease;

    &::before {
        content: ""; 
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: red;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s; 
        transition: all 0.3s ease-in-out 0s; 
    }   

    &:hover {
        color: #2490d1;

        &::before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }   
    }   
}

      @media (max-width: 190px) {
        html {
          font-size: 35%;
        }
        .card-img-top{
          height: 100px
        }
        .protocol-img{
          height:50%
        }
      }
      
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h1,h2,h3,h4,h5 {
    font-size: 15px;
  }
  //   .card-img-top, .card-body, .seller-Card{
  //   height: 200px
  // }
}
</style>