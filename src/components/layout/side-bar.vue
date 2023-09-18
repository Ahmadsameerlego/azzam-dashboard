<template>
  <section id="sidebar">
    <!-- logo  -->
    <section class="logo">
        <img :src="require('@/assets/imgs/logo.png')" alt="logo">
    </section>

    <!-- navigation  -->
    <nav class="sidebar_nav mt-4">
      <ul class="list">

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-desktop"></i>
              </span>

              <span class="nav_name mx-2 nav_name">
                الرئيسية
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/specialistsManage" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-users"></i>
              </span>

              <span class="mx-2 nav_name">
                إداة الاخصائيين
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/directConsultaions" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-wifi"></i>
              </span>

              <span class="nav_name mx-2 nav_name">
                ادارة الاستشارات المباشرة
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/treatManage" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-desktop"></i>
              </span>

              <span class="mx-2 nav_name">
                ادارة الخطط العلاجية
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/support" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-users"></i>
              </span>

              <span class="mx-2 nav_name">
                ادارة مجموعة الدعم
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/financial" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-coins"></i>
              </span>

              <span class="mx-2 nav_name">
                الحسابات المالية والارباح
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-wallet"></i>
              </span>

              <span class="mx-2 nav_name">
                المحفظة
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-regular fa-user"></i>
              </span>

              <span class="mx-2 nav_name">
                الملف الشخصي
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/login" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon logout">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </span>

              <span class="mx-2 nav_name">
                تسجيل الخروج
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>
        
      </ul>
    </nav>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>