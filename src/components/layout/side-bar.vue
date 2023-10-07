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
                {{  $t('nav.main') }}
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
                {{  $t('nav.spec')  }}
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
                {{ $t('nav.direct')  }}
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
                {{  $t('nav.treat')  }}
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
                {{  $t('nav.support')  }}
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
                {{  $t('nav.earn')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>


        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/contactMessages" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-regular fa-comments"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.messages')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/wallet" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-wallet"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.wallet')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/profile" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-regular fa-user"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.profile')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/contact" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-phone-volume"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.contact')  }}
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
                {{  $t('nav.logout')  }}
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