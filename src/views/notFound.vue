<template>
    <!-- Start advertisements Section -->
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class=" col-sm-offset-1 text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center">404</h1>
              </div>
  
              <div class="contant_box_404">
                <h3 class="h2">يبدو أن الصفحة التي تريدها غير موجودة</h3>
  
                <router-link to="/center/home" class="link_404">العودة للرئيسية</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End advertisements Section -->
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "notFoundView",
    data() {
      return {};
    },
    methods: {},
  
    components: {},
  });
  </script>
  <style scoped>
  /*======================
      404 page
  =======================*/
  
  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: "Arvo", serif;
  }
  
  .page_404 img {
    width: 100%;
  }
  
  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }
  
  .four_zero_four_bg h1 {
    font-size: 80px;
  }
  
  .four_zero_four_bg h3 {
    font-size: 80px;
  }
  
  .link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #2abdc7;
    margin: 20px 0;
    display: inline-block;
    font-size: 19px;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;
    letter-spacing: 1px;
  }
  .link_404:hover {
    color: #2abdc7 !important;
    border-color: #2abdc7;
    background: transparent;
    transform: scale(1.02);
  }
  .contant_box_404 {
    margin-top: -50px;
  }
  
  </style>