<template>
    <div class="home">
      <!-- side bar  -->
      <sidebar />
      <!-- header  -->
      <dash_header />
  
      <section id="content">
        <!-- content  -->
        <home />
      </section>
    </div>
  </template>
  
  <script>
  import sidebar from '@/components/layout/side-bar.vue';
  import dash_header from '@/components/layout/dash-header.vue';
  import home from '@/components/dashboard/notificationComp.vue'
  export default {
    name: 'HomeView',
    components: {
      sidebar,
      dash_header,
      home
    }
  }
  </script>
  